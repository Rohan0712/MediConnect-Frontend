import { Component } from '@angular/core';
import { TileDataService } from 'src/app/services/tile-data.service';
import { Doctor } from './doctor.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToasterService } from '../toaster.service.service';
import { CartItemsService } from '../services/cart-items.service';
import { CustomService } from '../services/custom-data.service';
import { ProductIdService } from '../services/product-id.service';
import { CartItem } from '../model/cart.model';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {
 doctors: Doctor[] | any;
 doctor!:Doctor;
 public id!: string;
  isClicked = false;
  cartItem: CartItem = {
    id: '',
    medicineId:0,
    name: '',
    quantity: 0,
    price: 0,
    image: ''
  };
  toggleClickedState() {
    this.isClicked = !this.isClicked;
    this.isClicked = !this.isClicked;
  }

  constructor(private tileDataService: TileDataService,private http: HttpClient,private router: Router,private toastr: ToasterService,private customService: CustomService,private cartItemsService: CartItemsService,private productIdsService:ProductIdService) {}
  private apiUrl = 'http://localhost:8080/api/doctorList'; // Replace with your API URL

  subscribe(doctor: any){
    console.log(doctor)

    //Add Doctor for subscription
    const indexToRemove = this.cartItemsService.cartItems.findIndex((cart: { name: string; })=> cart.name === doctor.name);
    this.doctor = doctor;
    if(this.customService.flag == true){
      // this.setMedicine(tile);
      //Generate Random Id
      this.id= Math.floor(Math.random() * 10000) + 1+'';
     // this.cartText = 'Added'
      // this.productIdsService.addElement(this.id);
      this.cartItem.id = this.id; 
      this.cartItem.name = this.doctor?.name;
      this.cartItem.price = this.doctor.price;
      this.cartItem.quantity =1;
      this.cartItem.image =this.doctor.image;
      if(this.cartItemsService.addElement(this.cartItem)){
        this.cartItem= {
          id: '',
          medicineId:0,
          name: '',
          quantity: 0,
          price: 0,
          image:''
        };
        this.toastr.success('Added to Cart','Click on Cart Icon');
      }else{
        this.toastr.warning('Product present in the cart','Product Already Added');
      }

    }else{
      this.router.navigate(['/login']);
      this.toastr.success('Login To Continue','');
    }

  }
  ngOnInit(): void {
    this.http.get<Doctor[]>(this.apiUrl).subscribe((doctors) => {
      this.doctors = doctors
    });
  }
}
