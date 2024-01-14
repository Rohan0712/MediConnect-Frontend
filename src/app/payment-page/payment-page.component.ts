import { Component } from '@angular/core';
import { CartItemsService } from 'src/app/services/cart-items.service';
import { CartItem } from '../model/cart.model';
import { ToasterService } from '../toaster.service.service';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { User } from '../sign-up/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from './order.model';
import { OrderDetails } from './orderDetails.model';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent {
  constructor(private cartItemsService: CartItemsService,private toastr: ToasterService,private router: Router,private userService:UserServiceService,public http: HttpClient ) { 
  }
  orderDetailsObj:OrderDetails={
    orderID: '',
    orderDetailID: '',
    medicineID: 0,
    quantity: 0,
    name: '',
    subtotal: 0
  };
  cartItemArr : CartItem[]=[];
  total!: number;
  randomValue: string = '';
  user : User={
    userID: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    accountVerification: false
  };
  order:Order={
    orderID: '',
    userID: '',
    orderDate: '',
    storeAddress: '',
    totalAmount: 0,
    referenceNumber: ''
  };
  private apiUrl = 'http://localhost:8080/api/saveOrderDetails';
  generateRandomValue() {
    const length = 10; // You can adjust the length of the random string as needed
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    this.randomValue = result;
    
    //Save OrderDetails and Orders Data
    this.user =
    
     this.userService.getUser();
    this.order.orderID=this.randomValue.concat("1A3");
    this.order.orderDate=Date();
    this.order.referenceNumber=this.randomValue;
    this.order.storeAddress=this.user.address;
    this.order.totalAmount=this.getTotal();
    this.order.userID=this.user.userID;
    const orderDetailsList : OrderDetails[] = [];
    for(const item of this.cartItemArr){
      this.orderDetailsObj.medicineID=item.medicineId;
      this.orderDetailsObj.name=item.name;
      this.orderDetailsObj.orderDetailID='';
      this.orderDetailsObj.orderID=this.order.orderID;
      this.orderDetailsObj.quantity=item.quantity
      this.orderDetailsObj.subtotal=item.price;
      orderDetailsList.push(this.orderDetailsObj);
      //Empty the object
      // this.orderDetailsObj.medicineID=0;
      // this.orderDetailsObj.name='';
      // this.orderDetailsObj.orderDetailID='';
      // this.orderDetailsObj.orderID='';
      // this.orderDetailsObj.quantity=0
      // this.orderDetailsObj.subtotal=0;
    }
    const userDetails: any ={
          "order":this.order,
          "orderDetailsList": orderDetailsList
      }
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json; charset=utf-8');
      const requestOptions: Object = {
      /* other options here */
      responseType: 'text'
      }
      this.http.post<any>(this.apiUrl, userDetails,requestOptions).subscribe(
      response => {
      // console.log('Post request successful:', response);
      this.toastr.success('Order Placed Successfull','Store Pick Up');
      // this.toastr.info('Cart is empty!!!','Place an Order');
      },
      error => {
      this.toastr.error("Try Again!!!","Error Occured")
      });

      }

  getTotal(): number {
    this.total =this.cartItemArr.reduce((total, item) => total + item.price * item.quantity, 0);
    return this.total;
  }
  ngOnInit(): void {
    this.cartItemArr =this.cartItemsService.cartItems;
    const amount = this.getTotal();
    if(amount ==0){
      this.toastr.info('Cart is empty!!!','Place an Order');
      this.router.navigate(['/']);
    }else{
      this.generateRandomValue();
    //call save order details method
    }
  }
  goToHomePage(){
    this.cartItemArr = [];
    this.cartItemsService.cartItems =[];
    this.toastr.info('Cart is empty!!!','Place an Order');
    this.router.navigate(['/']);
  }
}
