import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-revenue-analytics',
  imports: [CommonModule],
  templateUrl: './revenue-analytics.component.html',
  styleUrl: './revenue-analytics.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RevenueAnalyticsComponent {}
