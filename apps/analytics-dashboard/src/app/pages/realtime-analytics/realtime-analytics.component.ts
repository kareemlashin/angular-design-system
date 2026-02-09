import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-realtime-analytics',
  imports: [CommonModule],
  templateUrl: './realtime-analytics.component.html',
  styleUrl: './realtime-analytics.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RealtimeAnalyticsComponent {}
