import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gantt',
  imports: [CommonModule],
  templateUrl: './gantt.component.html',
  styleUrl: './gantt.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GanttComponent {}
