import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-push-settings',
  imports: [CommonModule],
  templateUrl: './push-settings.component.html',
  styleUrl: './push-settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PushSettingsComponent {}
