import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email-verification',
  imports: [CommonModule],
  templateUrl: './email-verification.component.html',
  styleUrl: './email-verification.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailVerificationComponent {}
