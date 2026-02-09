import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-two-factor-verify',
  imports: [CommonModule],
  templateUrl: './two-factor-verify.component.html',
  styleUrl: './two-factor-verify.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TwoFactorVerifyComponent {}
