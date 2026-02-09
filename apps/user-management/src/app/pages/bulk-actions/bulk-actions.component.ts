import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bulk-actions',
  imports: [CommonModule],
  templateUrl: './bulk-actions.component.html',
  styleUrl: './bulk-actions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BulkActionsComponent {}
