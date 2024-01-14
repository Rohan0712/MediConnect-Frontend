import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/model/cart.model';
import { ToasterService } from '../toaster.service.service';
@Injectable({
  providedIn: 'root'
})
export class CartItemsService {
  public cartItems: CartItem[] = [];
  public elementIndex!: number;
  constructor(private toastr: ToasterService) { }

   // Method to add Product to the string array
   addElement(element: CartItem): boolean {
    if(!this.isObjectInArray(element)){
      this.cartItems.push(element);
      return true;
    }else{
      return false;
    }
  }

  // Check Product is added or not
  isObjectInArray(element: CartItem): boolean {
    return this.cartItems.some(obj => obj.name === element.name)
  }

  // Empty Cart 
  emptyArray():void{

  }

  // Method to get the string array
  getStringArray(): CartItem[] {
    return this.cartItems;
  }
}
