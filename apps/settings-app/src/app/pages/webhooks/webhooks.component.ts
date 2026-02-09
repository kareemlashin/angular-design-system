import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-webhooks',
  imports: [CommonModule],
  templateUrl: './webhooks.component.html',
  styleUrl: './webhooks.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebhooksComponent {}
