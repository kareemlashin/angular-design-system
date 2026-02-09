import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workload',
  imports: [CommonModule],
  templateUrl: './workload.component.html',
  styleUrl: './workload.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkloadComponent {}
