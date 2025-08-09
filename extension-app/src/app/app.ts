import { Component, signal } from '@angular/core';
// import { RemoveButton } from './remove-button/remove-button';
// import { ToggleButton } from './toggle-button/toggle-button';
// import { ExtensionsCard } from './extensions-card/extensions-card';
// import { ExtensionModel } from './models/extension-model';
import { CommonModule } from '@angular/common';
// import { ExtensionsGrid } from './extensions-grid/extensions-grid';
// import { FilterTabs, FilterType } from './filter-tabs/filter-tabs';
// import { ExtensionsHeader } from './extensions-header/extensions-header';
import { ExtensionsPage } from './extensions-page/extensions-page';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ExtensionsPage],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('extension-app');
}
