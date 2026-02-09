import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-activity-logs',
  imports: [CommonModule],
  templateUrl: './activity-logs.component.html',
  styleUrl: './activity-logs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivityLogsComponent {}
