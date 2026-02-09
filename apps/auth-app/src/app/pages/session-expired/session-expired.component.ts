import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-session-expired',
  imports: [CommonModule],
  templateUrl: './session-expired.component.html',
  styleUrl: './session-expired.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SessionExpiredComponent {}
