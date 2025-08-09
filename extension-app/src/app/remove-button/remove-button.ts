import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-remove-button',
  imports: [],
  templateUrl: './remove-button.html',
  styleUrl: './remove-button.css',
})
export class RemoveButton {
  @Output() Clicked = new EventEmitter<void>();

  onClick(): void {
    this.Clicked.emit();
  }
}
