import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { ExtensionModel } from './extension-model';

export type FilterType = 'all' | 'active' | 'inactive';

@Injectable({
  providedIn: 'root',
})
export class ExtensionService {
  // Private subjects for state management
  private extensions$ = new BehaviorSubject<ExtensionModel[]>([]);
  private currentFilter$ = new BehaviorSubject<FilterType>('all');
  private isDarkTheme$ = new BehaviorSubject<boolean>(true);

  // Public observables
  public extensions = this.extensions$.asObservable();
  public currentFilter = this.currentFilter$.asObservable();
  public isDarkTheme = this.isDarkTheme$.asObservable();

  // Computed filtered extensions
  public filteredExtensions$ = combineLatest([
    this.extensions,
    this.currentFilter,
  ]).pipe(
    map(([extensions, filter]) => this.filterExtensions(extensions, filter))
  );

  constructor(private http: HttpClient) {
    this.loadExtensions();
  }

  // Load extensions from JSON file
  private loadExtensions(): void {
    this.http.get<ExtensionModel[]>('assets/data/data.json').subscribe({
      next: (extensions) => {
        this.extensions$.next(extensions);
      },
      error: (error) => {
        console.error('Error loading extensions:', error);
        this.extensions$.next([]);
      },
    });
  }

  // Filter extensions based on current filter
  private filterExtensions(
    extensions: ExtensionModel[],
    filter: FilterType
  ): ExtensionModel[] {
    switch (filter) {
      case 'active':
        return extensions.filter((ext) => ext.isActive);
      case 'inactive':
        return extensions.filter((ext) => !ext.isActive);
      default:
        return extensions;
    }
  }

  // Public methods for state changes
  toggleExtension(extensionName: string): void {
    const currentExtensions = this.extensions$.value;
    const updatedExtensions = currentExtensions.map((ext) =>
      ext.name === extensionName ? { ...ext, isActive: !ext.isActive } : ext
    );
    this.extensions$.next(updatedExtensions);
  }

  removeExtension(extensionName: string): void {
    const currentExtensions = this.extensions$.value;
    const updatedExtensions = currentExtensions.filter(
      (ext) => ext.name !== extensionName
    );
    this.extensions$.next(updatedExtensions);
  }

  setFilter(filter: FilterType): void {
    this.currentFilter$.next(filter);
  }

  toggleTheme(): void {
    const currentTheme = this.isDarkTheme$.value;
    this.isDarkTheme$.next(!currentTheme);
  }

  getCurrentFilter(): FilterType {
    return this.currentFilter$.value;
  }

  getCurrentTheme(): boolean {
    return this.isDarkTheme$.value;
  }
}
