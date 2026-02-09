import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-store-settings',
  imports: [CommonModule],
  templateUrl: './store-settings.component.html',
  styleUrl: './store-settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreSettingsComponent {}
