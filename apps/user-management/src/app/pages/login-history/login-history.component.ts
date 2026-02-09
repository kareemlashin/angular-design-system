import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-history',
  imports: [CommonModule],
  templateUrl: './login-history.component.html',
  styleUrl: './login-history.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginHistoryComponent {}
