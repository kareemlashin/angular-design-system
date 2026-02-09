import { Component, input, output, signal, Injectable, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

/**
 * Modal Component (Dumb/Presentational)
 *
 * A dialog overlay with backdrop, close button, and composition slots.
 *
 * @example
 * ```html
 * <ds-modal [open]="isOpen" (closed)="isOpen = false" title="Confirm Action">
 *   <div ds-modal-body>
 *     <p>Are you sure you want to proceed?</p>
 *   </div>
 *   <div ds-modal-footer>
 *     <ds-button variant="outline" (clicked)="isOpen = false">Cancel</ds-button>
 *     <ds-button variant="primary" (clicked)="confirm()">Confirm</ds-button>
 *   </div>
 * </ds-modal>
 * ```
 */
@Component({
  selector: 'ds-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  host: {
    '[class.ds-modal-host]': 'true'
  }
})
export class ModalComponent {
  open = input<boolean>(false);
  title = input<string>('');
  size = input<ModalSize>('md');
  closeOnBackdrop = input<boolean>(true);
  closeOnEscape = input<boolean>(true);
  showCloseButton = input<boolean>(true);
  ariaLabel = input<string>('');

  closed = output<void>();

  close(): void {
    this.closed.emit();
  }

  handleBackdropClick(event: MouseEvent): void {
    if (this.closeOnBackdrop() && event.target === event.currentTarget) {
      this.close();
    }
  }

  handleKeydown(event: KeyboardEvent): void {
    if (this.closeOnEscape() && event.key === 'Escape') {
      this.close();
    }
  }
}

/**
 * Modal Service (Smart)
 *
 * Programmatic API for opening and closing modals.
 *
 * @example
 * ```typescript
 * modalService = inject(ModalService);
 *
 * openConfirm() {
 *   const ref = this.modalService.open({
 *     title: 'Confirm',
 *     message: 'Are you sure?',
 *     confirmLabel: 'Yes',
 *     cancelLabel: 'No'
 *   });
 *
 *   ref.confirmed.subscribe(() => { ... });
 * }
 * ```
 */
export interface ModalConfig {
  title: string;
  message?: string;
  size?: ModalSize;
  confirmLabel?: string;
  cancelLabel?: string;
  showCancel?: boolean;
  type?: 'info' | 'warning' | 'danger' | 'success';
}

export interface ModalRef {
  id: string;
  config: ModalConfig;
}

@Injectable({ providedIn: 'root' })
export class ModalService {
  private activeModals = signal<ModalRef[]>([]);
  private confirmCallbacks = new Map<string, () => void>();
  private cancelCallbacks = new Map<string, () => void>();
  private counter = 0;

  modals = this.activeModals.asReadonly();

  open(config: ModalConfig): ModalRef & { onConfirm: (cb: () => void) => void; onCancel: (cb: () => void) => void } {
    const id = `modal-${++this.counter}`;
    const ref: ModalRef = { id, config };

    this.activeModals.update(modals => [...modals, ref]);

    return {
      ...ref,
      onConfirm: (cb: () => void) => this.confirmCallbacks.set(id, cb),
      onCancel: (cb: () => void) => this.cancelCallbacks.set(id, cb)
    };
  }

  confirm(id: string): void {
    const callback = this.confirmCallbacks.get(id);
    callback?.();
    this.close(id);
  }

  cancel(id: string): void {
    const callback = this.cancelCallbacks.get(id);
    callback?.();
    this.close(id);
  }

  close(id: string): void {
    this.activeModals.update(modals => modals.filter(m => m.id !== id));
    this.confirmCallbacks.delete(id);
    this.cancelCallbacks.delete(id);
  }

  closeAll(): void {
    this.activeModals.set([]);
    this.confirmCallbacks.clear();
    this.cancelCallbacks.clear();
  }
}

/**
 * Modal Outlet Component
 *
 * Place this once in your app root to render service-triggered modals.
 *
 * @example
 * ```html
 * <ds-modal-outlet />
 * ```
 */
@Component({
  selector: 'ds-modal-outlet',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  template: `
    @for (modal of modalService.modals(); track modal.id) {
      <ds-modal
        [open]="true"
        [title]="modal.config.title"
        [size]="modal.config.size || 'md'"
        (closed)="modalService.cancel(modal.id)"
      >
        <div ds-modal-body>
          @if (modal.config.message) {
            <p class="ds-modal-outlet__message">{{ modal.config.message }}</p>
          }
        </div>
        <div ds-modal-footer>
          @if (modal.config.showCancel !== false) {
            <button
              class="ds-modal-outlet__btn ds-modal-outlet__btn--cancel"
              (click)="modalService.cancel(modal.id)"
            >
              {{ modal.config.cancelLabel || 'Cancel' }}
            </button>
          }
          <button
            class="ds-modal-outlet__btn ds-modal-outlet__btn--confirm"
            [class]="'ds-modal-outlet__btn ds-modal-outlet__btn--' + (modal.config.type || 'info')"
            (click)="modalService.confirm(modal.id)"
          >
            {{ modal.config.confirmLabel || 'OK' }}
          </button>
        </div>
      </ds-modal>
    }
  `,
  styles: [`
    .ds-modal-outlet__message {
      font-size: 14px;
      color: #475569;
      line-height: 1.6;
      margin: 0;
    }

    .ds-modal-outlet__btn {
      padding: 8px 20px;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 500;
      font-family: inherit;
      cursor: pointer;
      transition: all 0.15s ease;
    }

    .ds-modal-outlet__btn--cancel {
      background: white;
      color: #334155;

      &:hover { background: #f8fafc; }
    }

    .ds-modal-outlet__btn--info {
      background: #2563eb;
      color: white;
      border-color: #2563eb;

      &:hover { background: #1d4ed8; }
    }

    .ds-modal-outlet__btn--success {
      background: #16a34a;
      color: white;
      border-color: #16a34a;

      &:hover { background: #15803d; }
    }

    .ds-modal-outlet__btn--warning {
      background: #d97706;
      color: white;
      border-color: #d97706;

      &:hover { background: #b45309; }
    }

    .ds-modal-outlet__btn--danger {
      background: #dc2626;
      color: white;
      border-color: #dc2626;

      &:hover { background: #b91c1c; }
    }
  `]
})
export class ModalOutletComponent {
  modalService = inject(ModalService);
}
