import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export type FilterType = 'all' | 'active' | 'inactive';

@Component({
  selector: 'app-filter-tabs',
  imports: [CommonModule],
  templateUrl: './filter-tabs.html',
  styleUrl: './filter-tabs.css',
})
export class FilterTabs {
  @Input() activeFilter: FilterType = 'all';
  @Output() filterChanged = new EventEmitter<FilterType>();

  onFilterClick(filter: FilterType): void {
    this.filterChanged.emit(filter);
  }
}
