import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tax-settings',
  imports: [CommonModule],
  templateUrl: './tax-settings.component.html',
  styleUrl: './tax-settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaxSettingsComponent {}
