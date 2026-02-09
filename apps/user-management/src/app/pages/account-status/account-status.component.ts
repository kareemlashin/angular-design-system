import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-status',
  imports: [CommonModule],
  templateUrl: './account-status.component.html',
  styleUrl: './account-status.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountStatusComponent {}
