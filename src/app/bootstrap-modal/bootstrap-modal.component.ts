import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-modal',
  templateUrl: './bootstrap-modal.component.html',
  styleUrls: ['./bootstrap-modal.component.css']
})
export class BootstrapModalComponent implements OnInit {
  title!:string
  content!:string;
  constructor() { }

  ngOnInit(): void {
  }

  public isOpen = false;

  openModal(title:string,content:string) {
    this.isOpen = true;
    this.title=title;
    this.content=content;
  }

  closeModal() {
    this.isOpen = false;
    this.title='';
    this.content='';
  }

  get isOpened() {
    return this.isOpen;
  }
}
