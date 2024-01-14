import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductIdService {
  public productIds: string[] = [];
  ;
  constructor() { }
   // Method to add elements to the string array
   addElement(element: string): void {
    this.productIds.push(element);
  }

  // Method to get the string array
  getStringArray(): string[] {
    return this.productIds;
  }
}
