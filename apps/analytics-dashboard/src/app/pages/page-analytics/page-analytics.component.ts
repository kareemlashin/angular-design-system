import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-analytics',
  imports: [CommonModule],
  templateUrl: './page-analytics.component.html',
  styleUrl: './page-analytics.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageAnalyticsComponent {}
