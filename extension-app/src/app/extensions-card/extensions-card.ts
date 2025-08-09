import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExtensionModel } from '../extension-model';
import { RemoveButton } from '../remove-button/remove-button';
import { ToggleButton } from '../toggle-button/toggle-button';

@Component({
  selector: 'app-extensions-card',
  imports: [RemoveButton, ToggleButton],
  templateUrl: './extensions-card.html',
  styleUrl: './extensions-card.css',
})
export class ExtensionsCard {
  @Input() extension!: ExtensionModel;
  @Output() toggleExtension = new EventEmitter<string>();
  @Output() removeExtension = new EventEmitter<string>();

  onToggle(): void {
    this.toggleExtension.emit(this.extension.name);
  }

  onRemove(): void {
    this.removeExtension.emit(this.extension.name);
  }
}
