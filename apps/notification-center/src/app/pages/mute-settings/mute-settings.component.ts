import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mute-settings',
  imports: [CommonModule],
  templateUrl: './mute-settings.component.html',
  styleUrl: './mute-settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MuteSettingsComponent {}
