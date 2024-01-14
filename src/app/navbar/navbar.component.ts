import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService } from '../toaster.service.service';
import { CustomService } from 'src/app/services/custom-data.service';
import { CartItemsService } from 'src/app/services/cart-items.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
   showCart: boolean = true;
  // loggedOut: boolean = false;
  constructor(private router: Router,private toastr: ToasterService,public customService: CustomService,private cartItemsService: CartItemsService) { 
  }

  signIn() {
    // Implement your sign-in logic here
    // this.loggedIn = true;
    this.router.navigate(['/login']);
  }
  
  signOut() {
    // Implement your sign-out logic here
    this.toastr.success('Logged Out Successfully','');
    // this.loggedIn = true;
    // this.loggedOut = false;
    this.customService.flag = false;
    this.router.navigate(['/login']);
  }
  
  goToCart(){
    if(this.customService.flag == undefined || this.customService.flag==false){
      this.router.navigate(['/login']);
      this.toastr.info("Enter credentials","Please Login!!!")
    }else{
      this.router.navigate(['/cart']);
    }
  }
  
  ngOnInit(): void {
    if(this.customService.flag == undefined || this.customService.flag==false){
      console.log('If Navbar Component'+this.customService.flag)
      //this.loggedIn = true;
      //this.loggedOut = false;
    }else{
      console.log('Else Navbar Component'+this.customService.flag)
      // this.loggedOut = this.customService.flag;
      // this.loggedIn = !this.customService.flag;
    }
    if(this.cartItemsService.cartItems.length==0){
      this.showCart = false;
    }else{
      this.showCart = true;
    }
  }
}
