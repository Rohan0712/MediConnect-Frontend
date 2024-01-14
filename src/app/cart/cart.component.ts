import { Component } from '@angular/core';
import { MedicineService } from 'src/app/services/medicine-data.service';
import { CartItemsService } from 'src/app/services/cart-items.service';
import { CartItem } from '../model/cart.model';
import { ToasterService } from '../toaster.service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(public medicineService: MedicineService,private cartItemsService: CartItemsService,private toastr: ToasterService,private router: Router) { 
  }
  cartItemArr! : CartItem[];
  name : any = this.medicineService.tile?.name;
  price : any = this.medicineService.tile?.price;
  quantity : any = this.medicineService.tile?.medicineId;
  cartItems = [
    {
      productName: 'Product 1',
      price: 25.0,
      quantity: 2,
    },
    {
      productName: 'Product 2',
      price: 15.0,
      quantity: 3,
    },
  ];

  quantities = ['1','2','3','4','5']

  updateQuantity(cartItem: CartItem, quantity:number){
    
  }

  getTotal(): number {
    return this.cartItemArr.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  goToPaymentPage(){
    if(this.cartItemArr.length==0){
      this.toastr.error('Add product to proceed','Cart is empty!')
    }else{
      // this.toastr.success('Order Placed Successfull','Store Pick Up');
      this.router.navigate(['/payment']);
    }
  }

  ngOnInit(): void {
    // this.tileDataService.getTiles().subscribe((tiles) => {
    //   this.tiles = tiles
    // });
    this.cartItemArr =this.cartItemsService.cartItems;
  }

}
