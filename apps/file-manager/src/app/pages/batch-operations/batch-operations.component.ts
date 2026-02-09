import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-batch-operations',
  imports: [CommonModule],
  templateUrl: './batch-operations.component.html',
  styleUrl: './batch-operations.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BatchOperationsComponent {}
