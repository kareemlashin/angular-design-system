import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-time-tracking',
  imports: [CommonModule],
  templateUrl: './time-tracking.component.html',
  styleUrl: './time-tracking.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeTrackingComponent {}
