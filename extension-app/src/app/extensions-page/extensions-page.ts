import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';

import { ExtensionsHeader } from '../extensions-header/extensions-header';
import { FilterTabs, FilterType } from '../filter-tabs/filter-tabs';
import { ExtensionsGrid } from '../extensions-grid/extensions-grid';
import { ExtensionService } from '../extension-service';
import { ExtensionModel } from '../extension-model';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-extensions-page',
  standalone: true,
  imports: [CommonModule, ExtensionsHeader, FilterTabs, ExtensionsGrid],
  templateUrl: './extensions-page.html',
  styleUrls: ['./extensions-page.css'],
})
export class ExtensionsPage implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  filteredExtensions: ExtensionModel[] = [];
  currentFilter: FilterType = 'all';
  isDarkTheme: boolean = true;

  constructor(
    private extensionsService: ExtensionService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Subscribe to filtered extensions
    this.extensionsService.filteredExtensions$
      .pipe(takeUntil(this.destroy$))
      .subscribe((extensions) => {
        this.filteredExtensions = extensions;
        this.cdr.detectChanges();
      });

    // Subscribe to current filter
    this.extensionsService.currentFilter
      .pipe(takeUntil(this.destroy$))
      .subscribe((filter) => {
        this.currentFilter = filter;
      });

    // Subscribe to theme state
    this.extensionsService.isDarkTheme
      .pipe(takeUntil(this.destroy$))
      .subscribe((isDark) => {
        this.isDarkTheme = isDark;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onThemeToggle(): void {
    this.extensionsService.toggleTheme();
  }

  onFilterChanged(filter: FilterType): void {
    this.extensionsService.setFilter(filter);
  }

  onExtensionToggle(extensionName: string): void {
    this.extensionsService.toggleExtension(extensionName);
  }

  onExtensionRemove(extensionName: string): void {
    this.extensionsService.removeExtension(extensionName);
  }
}
