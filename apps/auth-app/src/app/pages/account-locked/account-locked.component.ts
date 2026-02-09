import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-locked',
  imports: [CommonModule],
  templateUrl: './account-locked.component.html',
  styleUrl: './account-locked.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountLockedComponent {}
