import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-performance',
  imports: [CommonModule],
  templateUrl: './performance.component.html',
  styleUrl: './performance.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerformanceComponent {}
