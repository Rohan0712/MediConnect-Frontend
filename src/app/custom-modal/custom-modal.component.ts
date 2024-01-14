// custom-modal.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.css']
})
export class CustomModalComponent {
  @Input() isVisible = false;
  @Output() closeModal = new EventEmitter<void>();

  onClose(): void {
    this.isVisible = false;
    this.closeModal.emit();
  }
}
