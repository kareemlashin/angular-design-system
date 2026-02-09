import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-tracking',
  imports: [CommonModule],
  templateUrl: './event-tracking.component.html',
  styleUrl: './event-tracking.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventTrackingComponent {}
