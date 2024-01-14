import { Component, OnInit } from '@angular/core';
import { Tile } from './tile.model';
import { HttpClient } from '@angular/common/http';
import { PopupService } from './popup.service';
import { NgbPopover,NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pharmacy';
  tiles! : Tile[];
  tile! :Tile;
  isClicked = false;
  closeResult: string = '';
  showHomePage : boolean = false;

  constructor(public http: HttpClient,private popupService: PopupService,private modalService: NgbModal,private router: Router) {
    router.events.subscribe((val) =>{
      if(val instanceof NavigationEnd){
        if(val.url == '/' || val.url == ''){
          this.showHomePage = true;
        }else{
          this.showHomePage=false;
        }
      }
    });
  }
  private apiUrl = 'http://localhost:8080/api/medicinesList'; // Replace with your API URL

  //popUp
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  } 
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  selectedOption: string | undefined;
  options: string[] = ['1', '2', '3', '4'];

  toggleClickedState() {
    this.isClicked = !this.isClicked;
    this.isClicked = !this.isClicked;
  }

  ngOnInit(): void {
      this.http.get<Tile[]>(this.apiUrl).subscribe((tiles) => {
          console.log(tiles)
          this.tiles = tiles
        });
  }  
}
