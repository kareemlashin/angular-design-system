import { Component, input, output, computed, signal, TemplateRef, TrackByFunction } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TableColumn<T = any> {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string;
  align?: 'left' | 'center' | 'right';
  template?: TemplateRef<{ row: T; value: any }>;
}

export type SortDirection = 'asc' | 'desc';

export interface SortEvent {
  column: string;
  direction: SortDirection;
}

/**
 * Table Component (Dumb/Presentational)
 *
 * A data table with sorting, row selection, and custom cell templates.
 *
 * @example
 * ```html
 * <ds-table
 *   [columns]="columns"
 *   [data]="users"
 *   [sortColumn]="'name'"
 *   [sortDirection]="'asc'"
 *   (sortChanged)="handleSort($event)"
 *   (rowClicked)="handleRowClick($event)"
 * />
 * ```
 */
@Component({
  selector: 'ds-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  host: {
    '[class.ds-table-wrapper]': 'true',
    '[class.ds-table-wrapper--striped]': 'striped()',
    '[class.ds-table-wrapper--bordered]': 'bordered()',
    '[class.ds-table-wrapper--compact]': 'compact()',
    '[class.ds-table-wrapper--hoverable]': 'hoverable()'
  }
})
export class TableComponent<T = any> {
  columns = input.required<TableColumn<T>[]>();
  data = input.required<T[]>();
  loading = input<boolean>(false);
  sortColumn = input<string | null>(null);
  sortDirection = input<SortDirection>('asc');
  emptyMessage = input<string>('No data available');
  striped = input<boolean>(false);
  bordered = input<boolean>(false);
  compact = input<boolean>(false);
  hoverable = input<boolean>(true);
  trackByFn = input<TrackByFunction<T>>((index: number) => index);

  sortChanged = output<SortEvent>();
  rowClicked = output<T>();

  handleSort(columnKey: string): void {
    const column = this.columns().find(c => c.key === columnKey);
    if (!column?.sortable) return;

    let direction: SortDirection = 'asc';
    if (this.sortColumn() === columnKey && this.sortDirection() === 'asc') {
      direction = 'desc';
    }

    this.sortChanged.emit({ column: columnKey, direction });
  }

  handleRowClick(row: T): void {
    this.rowClicked.emit(row);
  }

  getCellValue(row: T, key: string): any {
    return (row as any)[key];
  }
}

/**
 * Table Container Component (Smart)
 *
 * Wraps the dumb table with sorting, pagination, and filtering logic.
 *
 * @example
 * ```html
 * <ds-table-container
 *   [columns]="columns"
 *   [data]="users"
 *   [pagination]="true"
 *   [pageSize]="10"
 *   (rowSelected)="handleSelect($event)"
 * />
 * ```
 */
@Component({
  selector: 'ds-table-container',
  standalone: true,
  imports: [CommonModule, TableComponent],
  template: `
    <div class="ds-table-container">
      <ds-table
        [columns]="columns()"
        [data]="paginatedData()"
        [loading]="loading()"
        [sortColumn]="currentSortColumn()"
        [sortDirection]="currentSortDirection()"
        [striped]="striped()"
        [bordered]="bordered()"
        [compact]="compact()"
        [hoverable]="hoverable()"
        [emptyMessage]="emptyMessage()"
        (sortChanged)="handleSort($event)"
        (rowClicked)="rowSelected.emit($event)"
      />

      @if (pagination() && totalPages() > 1) {
        <div class="ds-table-pagination">
          <span class="ds-table-pagination__info">
            Showing {{ paginationStart() + 1 }} - {{ paginationEnd() }} of {{ sortedData().length }}
          </span>

          <div class="ds-table-pagination__controls">
            <button
              class="ds-table-pagination__btn"
              [disabled]="currentPage() === 0"
              (click)="goToPage(0)"
              aria-label="First page"
            >
              &laquo;
            </button>
            <button
              class="ds-table-pagination__btn"
              [disabled]="currentPage() === 0"
              (click)="previousPage()"
              aria-label="Previous page"
            >
              &lsaquo;
            </button>

            <span class="ds-table-pagination__page">
              Page {{ currentPage() + 1 }} of {{ totalPages() }}
            </span>

            <button
              class="ds-table-pagination__btn"
              [disabled]="currentPage() >= totalPages() - 1"
              (click)="nextPage()"
              aria-label="Next page"
            >
              &rsaquo;
            </button>
            <button
              class="ds-table-pagination__btn"
              [disabled]="currentPage() >= totalPages() - 1"
              (click)="goToPage(totalPages() - 1)"
              aria-label="Last page"
            >
              &raquo;
            </button>
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .ds-table-container {
      width: 100%;
    }

    .ds-table-pagination {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      border-top: 1px solid #e2e8f0;
      font-size: 14px;
    }

    .ds-table-pagination__info {
      color: #64748b;
    }

    .ds-table-pagination__controls {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .ds-table-pagination__btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      background: white;
      color: #334155;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.15s ease;

      &:hover:not(:disabled) {
        background: #f1f5f9;
        border-color: #cbd5e1;
      }

      &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }
    }

    .ds-table-pagination__page {
      color: #334155;
      font-weight: 500;
      padding: 0 8px;
    }
  `]
})
export class TableContainerComponent<T = any> {
  columns = input.required<TableColumn<T>[]>();
  data = input.required<T[]>();
  loading = input<boolean>(false);
  pagination = input<boolean>(false);
  pageSize = input<number>(10);
  striped = input<boolean>(false);
  bordered = input<boolean>(false);
  compact = input<boolean>(false);
  hoverable = input<boolean>(true);
  emptyMessage = input<string>('No data available');

  rowSelected = output<T>();

  currentSortColumn = signal<string | null>(null);
  currentSortDirection = signal<SortDirection>('asc');
  currentPage = signal<number>(0);

  sortedData = computed(() => {
    let result = [...this.data()];
    const col = this.currentSortColumn();

    if (col) {
      result.sort((a: any, b: any) => {
        const aVal = a[col];
        const bVal = b[col];
        if (aVal == null && bVal == null) return 0;
        if (aVal == null) return 1;
        if (bVal == null) return -1;
        const comparison = aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
        return this.currentSortDirection() === 'asc' ? comparison : -comparison;
      });
    }

    return result;
  });

  totalPages = computed(() =>
    Math.ceil(this.sortedData().length / this.pageSize())
  );

  paginationStart = computed(() =>
    this.currentPage() * this.pageSize()
  );

  paginationEnd = computed(() =>
    Math.min(this.paginationStart() + this.pageSize(), this.sortedData().length)
  );

  paginatedData = computed(() => {
    if (!this.pagination()) return this.sortedData();
    return this.sortedData().slice(this.paginationStart(), this.paginationEnd());
  });

  handleSort(event: SortEvent): void {
    this.currentSortColumn.set(event.column);
    this.currentSortDirection.set(event.direction);
    this.currentPage.set(0);
  }

  nextPage(): void {
    if (this.currentPage() < this.totalPages() - 1) {
      this.currentPage.update(p => p + 1);
    }
  }

  previousPage(): void {
    if (this.currentPage() > 0) {
      this.currentPage.update(p => p - 1);
    }
  }

  goToPage(page: number): void {
    this.currentPage.set(Math.max(0, Math.min(page, this.totalPages() - 1)));
  }
}
