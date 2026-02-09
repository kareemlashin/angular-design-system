import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scheduled-reports',
  imports: [CommonModule],
  templateUrl: './scheduled-reports.component.html',
  styleUrl: './scheduled-reports.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduledReportsComponent {}
