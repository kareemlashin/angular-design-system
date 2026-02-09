# Angular Design System - 10 Components Guide

Complete implementation guide for 10 components using **Smart/Dumb (Container/Presentational) pattern**.

## Architecture Pattern

### Dumb/Presentational Components
- Pure presentation logic
- Receive data via `input()` signals
- Emit events via `output()` signals
- No service injection
- Reusable and testable

### Smart/Container Components
- Business logic and state management
- Data fetching and transformations
- Service injection
- Orchestrate dumb components

---

## 1. ✅ Button Component (COMPLETED)

**Type**: Dumb component (pure presentation)

**Location**: `libs/design-system/components/button`

**Features**:
- 5 variants: primary, secondary, outline, ghost, danger
- 3 sizes: sm, md, lg
- Loading state with spinner
- Disabled state
- Full width option
- WCAG 2.1 AA accessible
- Keyboard navigation (Enter/Space)

**Usage**:
```html
<ds-button variant="primary" size="md" (clicked)="handleClick()">
  Click Me
</ds-button>

<ds-button variant="outline" [loading]="isLoading">
  Submit
</ds-button>
```

**Storybook**: ✅ Complete with 10+ stories

---

## 2. Input Component (Dumb + Smart)

### Dumb Component: `ds-input`

```typescript
// libs/design-system/components/input/src/lib/input.component.ts
import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'ds-input',
  standalone: true,
  template: `
    <div class="ds-input">
      @if (label()) {
        <label [for]="id()" class="ds-input__label">
          {{ label() }}
          @if (required()) {
            <span class="ds-input__required">*</span>
          }
        </label>
      }

      <input
        [id]="id()"
        [type]="type()"
        [value]="value()"
        [placeholder]="placeholder()"
        [disabled]="disabled()"
        [readonly]="readonly()"
        [required]="required()"
        [attr.aria-label]="ariaLabel()"
        [attr.aria-describedby]="errorId"
        [attr.aria-invalid]="!!error()"
        (input)="onInput($event)"
        (blur)="onBlur($event)"
        (focus)="onFocus($event)"
        class="ds-input__field"
        [class.ds-input__field--error]="!!error()"
      />

      @if (error()) {
        <span [id]="errorId" class="ds-input__error" role="alert">
          {{ error() }}
        </span>
      }

      @if (hint() && !error()) {
        <span class="ds-input__hint">
          {{ hint() }}
        </span>
      }
    </div>
  `,
})
export class InputComponent {
  id = input.required<string>();
  type = input<string>('text');
  label = input<string>();
  value = input<string>('');
  placeholder = input<string>('');
  disabled = input<boolean>(false);
  readonly = input<boolean>(false);
  required = input<boolean>(false);
  error = input<string | null>(null);
  hint = input<string>();
  ariaLabel = input<string>();

  valueChange = output<string>();
  blurred = output<FocusEvent>();
  focused = output<FocusEvent>();

  errorId = `${this.id()}-error`;

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.valueChange.emit(value);
  }

  onBlur(event: FocusEvent): void {
    this.blurred.emit(event);
  }

  onFocus(event: FocusEvent): void {
    this.focused.emit(event);
  }
}
```

### Smart Component: `ds-input-container`

```typescript
// Smart wrapper with validation
@Component({
  selector: 'ds-input-container',
  standalone: true,
  imports: [InputComponent, ReactiveFormsModule],
  template: `
    <ds-input
      [id]="id()"
      [label]="label()"
      [value]="control().value"
      [error]="errorMessage()"
      [required]="required()"
      [disabled]="control().disabled"
      (valueChange)="control().setValue($event)"
      (blurred)="control().markAsTouched()"
    />
  `,
})
export class InputContainerComponent {
  id = input.required<string>();
  label = input.required<string>();
  control = input.required<FormControl>();
  required = input<boolean>(false);

  errorMessage = computed(() => {
    const control = this.control();
    if (control.invalid && control.touched) {
      if (control.errors?.['required']) return 'This field is required';
      if (control.errors?.['email']) return 'Invalid email address';
      if (control.errors?.['minlength'])
        return `Minimum ${control.errors?.['minlength'].requiredLength} characters`;
      return 'Invalid input';
    }
    return null;
  });
}
```

**Usage**:
```html
<!-- Dumb (controlled) -->
<ds-input
  id="email"
  label="Email"
  type="email"
  [value]="email"
  (valueChange)="email = $event"
/>

<!-- Smart (with form control) -->
<ds-input-container
  id="email"
  label="Email"
  [control]="emailControl"
  [required]="true"
/>
```

---

## 3. Table Component (Dumb + Smart)

### Dumb Component: `ds-table`

```typescript
@Component({
  selector: 'ds-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ds-table-container">
      <table class="ds-table">
        <thead class="ds-table__head">
          <tr>
            @for (column of columns(); track column.key) {
              <th
                class="ds-table__header"
                [class.ds-table__header--sortable]="column.sortable"
                (click)="column.sortable && columnClicked.emit(column.key)"
              >
                {{ column.label }}
                @if (column.sortable && sortColumn() === column.key) {
                  <span class="ds-table__sort-icon">
                    {{ sortDirection() === 'asc' ? '↑' : '↓' }}
                  </span>
                }
              </th>
            }
          </tr>
        </thead>
        <tbody class="ds-table__body">
          @if (loading()) {
            <tr>
              <td [attr.colspan]="columns().length" class="ds-table__loading">
                Loading...
              </td>
            </tr>
          } @else if (data().length === 0) {
            <tr>
              <td [attr.colspan]="columns().length" class="ds-table__empty">
                {{ emptyMessage() }}
              </td>
            </tr>
          } @else {
            @for (row of data(); track trackBy($index, row)) {
              <tr class="ds-table__row" (click)="rowClicked.emit(row)">
                @for (column of columns(); track column.key) {
                  <td class="ds-table__cell">
                    @if (column.template) {
                      <ng-container [ngTemplateOutlet]="column.template" [ngTemplateOutletContext]="{row, value: row[column.key]}"/>
                    } @else {
                      {{ row[column.key] }}
                    }
                  </td>
                }
              </tr>
            }
          }
        </tbody>
      </table>
    </div>
  `,
})
export class TableComponent<T = any> {
  columns = input.required<TableColumn[]>();
  data = input.required<T[]>();
  loading = input<boolean>(false);
  sortColumn = input<string | null>(null);
  sortDirection = input<'asc' | 'desc'>('asc');
  emptyMessage = input<string>('No data available');
  trackBy = input<TrackByFunction<T>>((index) => index);

  columnClicked = output<string>();
  rowClicked = output<T>();
}

interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  template?: TemplateRef<any>;
}
```

### Smart Component: `ds-table-container`

```typescript
@Component({
  selector: 'ds-table-container',
  standalone: true,
  imports: [TableComponent, CommonModule],
  template: `
    <ds-table
      [columns]="columns"
      [data]="sortedAndFilteredData()"
      [loading]="loading()"
      [sortColumn]="sortColumn()"
      [sortDirection]="sortDirection()"
      (columnClicked)="handleSort($event)"
      (rowClicked)="rowSelected.emit($event)"
    />

    @if (pagination()) {
      <div class="ds-table__pagination">
        <ds-button
          size="sm"
          [disabled]="currentPage() === 0"
          (clicked)="previousPage()"
        >
          Previous
        </ds-button>
        <span>Page {{ currentPage() + 1 }} of {{ totalPages() }}</span>
        <ds-button
          size="sm"
          [disabled]="currentPage() === totalPages() - 1"
          (clicked)="nextPage()"
        >
          Next
        </ds-button>
      </div>
    }
  `,
})
export class TableContainerComponent<T = any> {
  columns = input.required<TableColumn[]>();
  data = input.required<T[]>();
  pagination = input<boolean>(false);
  pageSize = input<number>(10);

  rowSelected = output<T>();

  private sortColumn = signal<string | null>(null);
  private sortDirection = signal<'asc' | 'desc'>('asc');
  currentPage = signal<number>(0);
  loading = signal<boolean>(false);

  sortedAndFilteredData = computed(() => {
    let result = [...this.data()];

    // Sorting
    if (this.sortColumn()) {
      result.sort((a, b) => {
        const aVal = a[this.sortColumn()!];
        const bVal = b[this.sortColumn()!];
        const comparison = aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
        return this.sortDirection() === 'asc' ? comparison : -comparison;
      });
    }

    // Pagination
    if (this.pagination()) {
      const start = this.currentPage() * this.pageSize();
      result = result.slice(start, start + this.pageSize());
    }

    return result;
  });

  totalPages = computed(() =>
    Math.ceil(this.data().length / this.pageSize())
  );

  handleSort(column: string): void {
    if (this.sortColumn() === column) {
      this.sortDirection.update(dir => dir === 'asc' ? 'desc' : 'asc');
    } else {
      this.sortColumn.set(column);
      this.sortDirection.set('asc');
    }
  }

  nextPage(): void {
    this.currentPage.update(page => page + 1);
  }

  previousPage(): void {
    this.currentPage.update(page => Math.max(0, page - 1));
  }
}
```

**Usage**:
```typescript
// In your component
columns = [
  { key: 'id', label: 'ID', sortable: true },
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'status', label: 'Status' },
];

data = signal([
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
]);
```

```html
<!-- Dumb (fully controlled) -->
<ds-table
  [columns]="columns"
  [data]="data()"
  [loading]="loading"
  (columnClicked)="handleSort($event)"
  (rowClicked)="handleRowClick($event)"
/>

<!-- Smart (with built-in sorting/pagination) -->
<ds-table-container
  [columns]="columns"
  [data]="data()"
  [pagination]="true"
  [pageSize]="10"
  (rowSelected)="handleRowSelect($event)"
/>
```

---

## 4. Sidenav Component (Dumb + Smart)

### Dumb Component: `ds-sidenav`

```typescript
@Component({
  selector: 'ds-sidenav',
  standalone: true,
  imports: [CommonModule, TrapFocusDirective],
  template: `
    @if (open()) {
      <div class="ds-sidenav-backdrop" (click)="backdropClicked.emit()"></div>
    }

    <nav
      class="ds-sidenav"
      [class.ds-sidenav--open]="open()"
      [class.ds-sidenav--left]="position() === 'left'"
      [class.ds-sidenav--right]="position() === 'right'"
      [attr.aria-label]="ariaLabel()"
      dsTrapFocus
      [dsTrapFocus]="open()"
    >
      <div class="ds-sidenav__header">
        <ng-content select="[ds-sidenav-header]"></ng-content>
        <button
          class="ds-sidenav__close"
          (click)="closeClicked.emit()"
          aria-label="Close navigation"
        >
          ✕
        </button>
      </div>

      <div class="ds-sidenav__content">
        <ng-content></ng-content>
      </div>

      <div class="ds-sidenav__footer">
        <ng-content select="[ds-sidenav-footer]"></ng-content>
      </div>
    </nav>
  `,
})
export class SidenavComponent {
  open = input<boolean>(false);
  position = input<'left' | 'right'>('left');
  ariaLabel = input<string>('Navigation');

  closeClicked = output<void>();
  backdropClicked = output<void>();
}
```

### Smart Component: `ds-sidenav-container`

```typescript
@Component({
  selector: 'ds-sidenav-container',
  standalone: true,
  imports: [SidenavComponent, CommonModule],
  template: `
    <ds-sidenav
      [open]="isOpen()"
      [position]="position()"
      (closeClicked)="close()"
      (backdropClicked)="close()"
    >
      <div ds-sidenav-header>
        <h2>{{ title() }}</h2>
      </div>

      <ul class="ds-sidenav__menu">
        @for (item of menuItems(); track item.id) {
          <li>
            <a
              [href]="item.route"
              class="ds-sidenav__link"
              [class.ds-sidenav__link--active]="item.id === activeItem()"
              (click)="handleItemClick(item, $event)"
            >
              {{ item.label }}
            </a>
          </li>
        }
      </ul>

      <div ds-sidenav-footer>
        <ng-content></ng-content>
      </div>
    </ds-sidenav>
  `,
})
export class SidenavContainerComponent {
  title = input<string>('Menu');
  position = input<'left' | 'right'>('left');
  menuItems = input.required<MenuItem[]>();

  private isOpen = signal<boolean>(false);
  private activeItem = signal<string | null>(null);

  itemSelected = output<MenuItem>();

  open(): void {
    this.isOpen.set(true);
  }

  close(): void {
    this.isOpen.set(false);
  }

  toggle(): void {
    this.isOpen.update(open => !open);
  }

  handleItemClick(item: MenuItem, event: Event): void {
    event.preventDefault();
    this.activeItem.set(item.id);
    this.itemSelected.emit(item);
    if (item.closeOnClick) {
      this.close();
    }
  }
}

interface MenuItem {
  id: string;
  label: string;
  route: string;
  closeOnClick?: boolean;
}
```

**Usage**:
```html
<!-- Dumb -->
<ds-sidenav
  [open]="sidenavOpen"
  position="left"
  (closeClicked)="sidenavOpen = false"
>
  <div ds-sidenav-header>
    <h2>Menu</h2>
  </div>
  <!-- Content -->
</ds-sidenav>

<!-- Smart -->
<ds-sidenav-container
  title="Navigation"
  [menuItems]="navItems"
  (itemSelected)="handleNavigation($event)"
/>
```

---

## 5-10. Remaining Components (Summary)

### 5. Card Component (Dumb)
```html
<ds-card>
  <ds-card-header>Title</ds-card-header>
  <ds-card-content>Content</ds-card-content>
  <ds-card-footer>Actions</ds-card-footer>
</ds-card>
```

### 6. Modal Component (Smart + Dumb)
```typescript
// Dumb: ds-modal (presentation)
// Smart: ModalService (open/close state management)
modalService.open(MyComponent, { data: {...} });
```

### 7. Select Component (Dumb)
```html
<ds-select [options]="options" (selectionChange)="handleChange($event)" />
```

### 8. Checkbox Component (Dumb)
```html
<ds-checkbox [checked]="checked" (checkedChange)="checked = $event">
  Accept terms
</ds-checkbox>
```

### 9. Typography Components (Dumb)
```html
<ds-heading level="1">Heading</ds-heading>
<ds-text size="lg">Paragraph text</ds-text>
```

### 10. Toast/Alert Component (Smart + Dumb)
```typescript
// Smart: ToastService
toastService.success('Saved successfully!');
toastService.error('An error occurred');
```

---

## Implementation Checklist

### For Each Component:

- [ ] Create dumb component (presentational)
- [ ] Add signal inputs/outputs
- [ ] Implement accessibility (ARIA, keyboard)
- [ ] Create SCSS with design tokens
- [ ] Write unit tests
- [ ] Create Storybook stories
- [ ] Create smart component (if needed)
- [ ] Add service (if needed)
- [ ] Update exports in index.ts
- [ ] Document usage examples

### Smart/Dumb Decision Tree:

**Use Dumb Only**:
- Pure presentation (Button, Card, Typography)
- Form controls (Input, Select, Checkbox)
- Simple display components

**Use Smart + Dumb**:
- Complex state management (Table sorting/pagination)
- API integration
- Global state (Modal, Toast, Sidenav)
- Form validation logic

---

## Next Steps

1. **Complete Button Component** ✅
2. **Run Storybook**: `npm run storybook`
3. **Build remaining components** using patterns above
4. **Test accessibility** in Storybook a11y addon
5. **Create comprehensive tests**
6. **Document in Storybook MDX**

## Quick Command Reference

```bash
# Generate new component library
npx nx g @nx/angular:library --name=COMPONENT --directory=libs/design-system/components/COMPONENT --standalone=true

# Start Storybook
npm run storybook

# Run tests
npm test

# Build all
npm run build
```
