import { Component, OnInit } from '@angular/core';
import { TileDataService } from '../services/tile-data.service';
import { Tile } from 'src/app/tile/tile.model';
import { Router } from '@angular/router';
import { ToasterService } from '../toaster.service.service';
import { MedicineService } from 'src/app/services/medicine-data.service';
import { CustomService } from 'src/app/services/custom-data.service';
import { CartItemsService } from 'src/app/services/cart-items.service';
import { ProductIdService } from 'src/app/services/product-id.service';
import { CartItem } from 'src/app/model/cart.model';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit{
  cartText: string = 'Add To Cart';
  cartItem: CartItem = {
    id: '',
    medicineId:0,
    name: '',
    quantity: 0,
    price: 0,
    image: ''
  };
  constructor(private tileDataService: TileDataService,private router: Router,private toastr: ToasterService,private medicineService: MedicineService,private customService: CustomService,private cartItemsService: CartItemsService,private productIdsService:ProductIdService) {}

  setMedicine(tile: Tile) {
    this.medicineService.tile = tile;
  }
  displayText: string = '';
  tiles! : Tile[];
  isClicked = false;
  tile! :Tile;
  elementPresent: boolean = false;
  public id!: string;
  toggleClickedState() {
    this.isClicked = !this.isClicked;
    this.isClicked = !this.isClicked;
  }

  addToCart(tile: any,quantity: number){
    this.displayText = 'Item Added to Cart';
    const indexToRemove = this.cartItemsService.cartItems.findIndex((cart: { name: string; })=> cart.name === tile.name);
    this.tile = tile;
    if(this.customService.flag == true){
      this.setMedicine(tile);
      //Generate Random Id
      this.id= Math.floor(Math.random() * 10000) + 1+'';
     // this.cartText = 'Added'
      this.productIdsService.addElement(this.id);
      this.cartItem.id = this.id; 
      this.cartItem.medicineId=this.tile.medicineId;
      this.cartItem.name = this.tile?.name;
      this.cartItem.price = this.tile.price;
      this.cartItem.quantity =quantity;
      this.cartItem.image =this.tile.imageUrl;
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
    // Set a timeout to hide the text after 2 seconds (2000 milliseconds)
    setTimeout(() => {
      this.displayText = '';
    }, 2000);
    
  }

  selectedOption: string | undefined;
  options: string[] = ['1', '2', '3', '4'];

  ngOnInit(): void {
    this.tileDataService.getTiles().subscribe((tiles) => {
      this.tiles = tiles
    });
   // this.tiles =this.tileDataService.getTiles();
  }
}
