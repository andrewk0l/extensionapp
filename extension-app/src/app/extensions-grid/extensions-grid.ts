import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtensionModel } from '../extension-model';
import { ExtensionsCard } from '../extensions-card/extensions-card';

@Component({
  selector: 'app-extensions-grid',
  imports: [CommonModule, ExtensionsCard],
  templateUrl: './extensions-grid.html',
  styleUrl: './extensions-grid.css',
})
export class ExtensionsGrid {
  @Input() extensions: ExtensionModel[] = [];
  @Output() toggleExtension = new EventEmitter<string>();
  @Output() removeExtension = new EventEmitter<string>();

  onToggleExtension(extensionName: string): void {
    this.toggleExtension.emit(extensionName);
  }

  onRemoveExtension(extensionName: string): void {
    this.removeExtension.emit(extensionName);
  }
}
