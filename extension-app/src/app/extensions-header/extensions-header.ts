import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-extensions-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './extensions-header.html',
  styleUrls: ['./extensions-header.css'],
})
export class ExtensionsHeader {
  @Input() isDarkTheme: boolean = true;
  @Output() themeToggled = new EventEmitter<void>();

  onThemeToggle(): void {
    this.themeToggled.emit();
  }
}
