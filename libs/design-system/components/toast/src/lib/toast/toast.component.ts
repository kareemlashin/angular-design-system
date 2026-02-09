import { Component, input, output, signal, computed, Injectable, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ToastType = 'success' | 'error' | 'warning' | 'info';
export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';

export interface ToastConfig {
  message: string;
  title?: string;
  type?: ToastType;
  duration?: number;
  dismissible?: boolean;
}

export interface Toast extends ToastConfig {
  id: string;
  type: ToastType;
  duration: number;
  dismissible: boolean;
  createdAt: number;
}

/**
 * Toast Item Component (Dumb/Presentational)
 *
 * A single toast notification.
 */
@Component({
  selector: 'ds-toast-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="ds-toast"
      [class]="'ds-toast ds-toast--' + type()"
      role="alert"
      aria-live="assertive"
    >
      <div class="ds-toast__icon">
        @switch (type()) {
          @case ('success') { <span>&#10003;</span> }
          @case ('error') { <span>&#10007;</span> }
          @case ('warning') { <span>&#9888;</span> }
          @case ('info') { <span>&#8505;</span> }
        }
      </div>

      <div class="ds-toast__content">
        @if (title()) {
          <div class="ds-toast__title">{{ title() }}</div>
        }
        <div class="ds-toast__message">{{ message() }}</div>
      </div>

      @if (dismissible()) {
        <button
          class="ds-toast__close"
          (click)="dismissed.emit()"
          aria-label="Dismiss notification"
          type="button"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      }
    </div>
  `,
  styleUrls: ['./toast.component.scss']
})
export class ToastItemComponent {
  message = input.required<string>();
  title = input<string>('');
  type = input<ToastType>('info');
  dismissible = input<boolean>(true);

  dismissed = output<void>();
}

/**
 * Toast Service (Smart)
 *
 * Programmatic API for showing toast notifications.
 *
 * @example
 * ```typescript
 * toastService = inject(ToastService);
 *
 * this.toastService.success('File saved successfully!');
 * this.toastService.error('An error occurred');
 * this.toastService.warning('Low disk space');
 * this.toastService.info('New update available');
 * ```
 */
@Injectable({ providedIn: 'root' })
export class ToastService {
  private toasts = signal<Toast[]>([]);
  private counter = 0;
  private timers = new Map<string, ReturnType<typeof setTimeout>>();

  activeToasts = this.toasts.asReadonly();
  position = signal<ToastPosition>('top-right');
  maxToasts = signal<number>(5);

  success(message: string, options?: Partial<ToastConfig>): Toast {
    return this.show({ ...options, message, type: 'success' });
  }

  error(message: string, options?: Partial<ToastConfig>): Toast {
    return this.show({ ...options, message, type: 'error', duration: options?.duration ?? 8000 });
  }

  warning(message: string, options?: Partial<ToastConfig>): Toast {
    return this.show({ ...options, message, type: 'warning' });
  }

  info(message: string, options?: Partial<ToastConfig>): Toast {
    return this.show({ ...options, message, type: 'info' });
  }

  show(config: ToastConfig): Toast {
    const toast: Toast = {
      id: `toast-${++this.counter}`,
      message: config.message,
      title: config.title,
      type: config.type ?? 'info',
      duration: config.duration ?? 5000,
      dismissible: config.dismissible ?? true,
      createdAt: Date.now()
    };

    // Remove oldest if over max
    this.toasts.update(toasts => {
      const updated = [...toasts, toast];
      if (updated.length > this.maxToasts()) {
        const removed = updated.shift()!;
        this.clearTimer(removed.id);
      }
      return updated;
    });

    // Auto-dismiss
    if (toast.duration > 0) {
      const timer = setTimeout(() => this.dismiss(toast.id), toast.duration);
      this.timers.set(toast.id, timer);
    }

    return toast;
  }

  dismiss(id: string): void {
    this.clearTimer(id);
    this.toasts.update(toasts => toasts.filter(t => t.id !== id));
  }

  dismissAll(): void {
    this.timers.forEach((_, id) => this.clearTimer(id));
    this.toasts.set([]);
  }

  private clearTimer(id: string): void {
    const timer = this.timers.get(id);
    if (timer) {
      clearTimeout(timer);
      this.timers.delete(id);
    }
  }
}

/**
 * Toast Container Component
 *
 * Place this once in your app root to render toast notifications.
 *
 * @example
 * ```html
 * <ds-toast-container position="top-right" />
 * ```
 */
@Component({
  selector: 'ds-toast-container',
  standalone: true,
  imports: [CommonModule, ToastItemComponent],
  template: `
    <div class="ds-toast-container" [class]="'ds-toast-container ds-toast-container--' + toastService.position()">
      @for (toast of toastService.activeToasts(); track toast.id) {
        <ds-toast-item
          [message]="toast.message"
          [title]="toast.title || ''"
          [type]="toast.type"
          [dismissible]="toast.dismissible"
          (dismissed)="toastService.dismiss(toast.id)"
        />
      }
    </div>
  `,
  styles: [`
    .ds-toast-container {
      position: fixed;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 8px;
      pointer-events: none;
      max-width: 420px;
      width: 100%;

      > * { pointer-events: auto; }
    }

    .ds-toast-container--top-right {
      top: 16px; right: 16px;
    }

    .ds-toast-container--top-left {
      top: 16px; left: 16px;
    }

    .ds-toast-container--bottom-right {
      bottom: 16px; right: 16px;
      flex-direction: column-reverse;
    }

    .ds-toast-container--bottom-left {
      bottom: 16px; left: 16px;
      flex-direction: column-reverse;
    }

    .ds-toast-container--top-center {
      top: 16px;
      left: 50%;
      transform: translateX(-50%);
    }

    .ds-toast-container--bottom-center {
      bottom: 16px;
      left: 50%;
      transform: translateX(-50%);
      flex-direction: column-reverse;
    }
  `]
})
export class ToastContainerComponent {
  toastService = inject(ToastService);
}
