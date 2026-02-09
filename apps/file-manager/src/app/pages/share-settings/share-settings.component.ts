import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-share-settings',
  imports: [CommonModule],
  templateUrl: './share-settings.component.html',
  styleUrl: './share-settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShareSettingsComponent {}
