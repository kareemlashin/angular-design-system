import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recovery-codes',
  imports: [CommonModule],
  templateUrl: './recovery-codes.component.html',
  styleUrl: './recovery-codes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecoveryCodesComponent {}
