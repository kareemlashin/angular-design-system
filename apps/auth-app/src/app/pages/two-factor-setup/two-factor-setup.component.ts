import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-two-factor-setup',
  imports: [CommonModule],
  templateUrl: './two-factor-setup.component.html',
  styleUrl: './two-factor-setup.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TwoFactorSetupComponent {}
