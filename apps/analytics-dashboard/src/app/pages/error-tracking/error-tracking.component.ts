import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error-tracking',
  imports: [CommonModule],
  templateUrl: './error-tracking.component.html',
  styleUrl: './error-tracking.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorTrackingComponent {}
