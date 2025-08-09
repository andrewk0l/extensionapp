import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  imports: [],
  templateUrl: './toggle-button.html',
  styleUrl: './toggle-button.css',
})
export class ToggleButton {
  @Input() isActive: Boolean = false;
  @Output() toggled = new EventEmitter<void>();
  onToggle(): void {
    this.toggled.emit();
  }
}
