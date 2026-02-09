import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy-settings',
  imports: [CommonModule],
  templateUrl: './privacy-settings.component.html',
  styleUrl: './privacy-settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacySettingsComponent {}
