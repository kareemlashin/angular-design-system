import { Component, input, output, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SidenavItem {
  id: string;
  label: string;
  icon?: string;
  route?: string;
  badge?: string | number;
  children?: SidenavItem[];
  disabled?: boolean;
}

/**
 * Sidenav Component (Dumb/Presentational)
 *
 * A responsive side navigation panel with backdrop overlay.
 *
 * @example
 * ```html
 * <ds-sidenav
 *   [open]="isOpen"
 *   position="left"
 *   (closed)="isOpen = false"
 * >
 *   <div ds-sidenav-header>
 *     <h2>Navigation</h2>
 *   </div>
 *   <nav>Your menu items here</nav>
 * </ds-sidenav>
 * ```
 */
@Component({
  selector: 'ds-sidenav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  host: {
    '[class.ds-sidenav-host]': 'true'
  }
})
export class SidenavComponent {
  open = input<boolean>(false);
  position = input<'left' | 'right'>('left');
  width = input<string>('280px');
  ariaLabel = input<string>('Navigation');
  overlay = input<boolean>(true);

  closed = output<void>();

  close(): void {
    this.closed.emit();
  }

  handleBackdropClick(): void {
    this.close();
  }

  handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.close();
    }
  }
}

/**
 * Sidenav Container Component (Smart)
 *
 * Wraps the dumb sidenav with state management and menu items.
 *
 * @example
 * ```html
 * <ds-sidenav-container
 *   [menuItems]="items"
 *   [title]="'Navigation'"
 *   (itemSelected)="navigate($event)"
 * />
 * ```
 */
@Component({
  selector: 'ds-sidenav-container',
  standalone: true,
  imports: [CommonModule, SidenavComponent],
  template: `
    <ds-sidenav
      [open]="isOpen()"
      [position]="position()"
      [width]="width()"
      [ariaLabel]="title()"
      (closed)="close()"
    >
      <div ds-sidenav-header>
        @if (title()) {
          <h2 class="ds-sidenav-container__title">{{ title() }}</h2>
        }
      </div>

      <ul class="ds-sidenav-menu" role="navigation">
        @for (item of menuItems(); track item.id) {
          <li class="ds-sidenav-menu__item">
            <button
              class="ds-sidenav-menu__link"
              [class.ds-sidenav-menu__link--active]="activeItemId() === item.id"
              [class.ds-sidenav-menu__link--disabled]="item.disabled"
              [disabled]="item.disabled"
              (click)="handleItemClick(item)"
              [attr.aria-current]="activeItemId() === item.id ? 'page' : null"
            >
              @if (item.icon) {
                <span class="ds-sidenav-menu__icon">{{ item.icon }}</span>
              }
              <span class="ds-sidenav-menu__label">{{ item.label }}</span>
              @if (item.badge) {
                <span class="ds-sidenav-menu__badge">{{ item.badge }}</span>
              }
            </button>

            @if (item.children && item.children.length > 0) {
              <ul class="ds-sidenav-submenu">
                @for (child of item.children; track child.id) {
                  <li>
                    <button
                      class="ds-sidenav-submenu__link"
                      [class.ds-sidenav-submenu__link--active]="activeItemId() === child.id"
                      [disabled]="child.disabled"
                      (click)="handleItemClick(child)"
                    >
                      {{ child.label }}
                    </button>
                  </li>
                }
              </ul>
            }
          </li>
        }
      </ul>
    </ds-sidenav>
  `,
  styles: [`
    .ds-sidenav-container__title {
      font-size: 18px;
      font-weight: 600;
      color: #0f172a;
      margin: 0;
    }

    .ds-sidenav-menu {
      list-style: none;
      margin: 0;
      padding: 8px;
    }

    .ds-sidenav-menu__link {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 100%;
      padding: 10px 16px;
      border: none;
      border-radius: 8px;
      background: transparent;
      color: #334155;
      font-size: 14px;
      font-family: inherit;
      cursor: pointer;
      transition: all 0.15s ease;
      text-align: left;

      &:hover:not(:disabled) {
        background: #f1f5f9;
      }

      &.ds-sidenav-menu__link--active {
        background: rgba(37, 99, 235, 0.08);
        color: #2563eb;
        font-weight: 500;
      }

      &.ds-sidenav-menu__link--disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }
    }

    .ds-sidenav-menu__icon {
      font-size: 18px;
      width: 24px;
      text-align: center;
    }

    .ds-sidenav-menu__label {
      flex: 1;
    }

    .ds-sidenav-menu__badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 20px;
      height: 20px;
      padding: 0 6px;
      border-radius: 10px;
      background: #ef4444;
      color: white;
      font-size: 11px;
      font-weight: 600;
    }

    .ds-sidenav-submenu {
      list-style: none;
      margin: 0;
      padding: 0 0 0 52px;
    }

    .ds-sidenav-submenu__link {
      display: block;
      width: 100%;
      padding: 8px 16px;
      border: none;
      border-radius: 6px;
      background: transparent;
      color: #64748b;
      font-size: 13px;
      font-family: inherit;
      cursor: pointer;
      text-align: left;
      transition: all 0.15s ease;

      &:hover:not(:disabled) {
        background: #f1f5f9;
        color: #334155;
      }

      &.ds-sidenav-submenu__link--active {
        color: #2563eb;
        font-weight: 500;
      }
    }
  `]
})
export class SidenavContainerComponent {
  menuItems = input.required<SidenavItem[]>();
  title = input<string>('Navigation');
  position = input<'left' | 'right'>('left');
  width = input<string>('280px');

  itemSelected = output<SidenavItem>();

  isOpen = signal<boolean>(false);
  activeItemId = signal<string | null>(null);

  open(): void {
    this.isOpen.set(true);
  }

  close(): void {
    this.isOpen.set(false);
  }

  toggle(): void {
    this.isOpen.update(v => !v);
  }

  handleItemClick(item: SidenavItem): void {
    if (item.disabled) return;
    this.activeItemId.set(item.id);
    this.itemSelected.emit(item);
  }
}
