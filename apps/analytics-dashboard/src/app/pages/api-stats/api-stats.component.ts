import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-stats',
  imports: [CommonModule],
  templateUrl: './api-stats.component.html',
  styleUrl: './api-stats.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApiStatsComponent {}
