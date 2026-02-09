import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seo-settings',
  imports: [CommonModule],
  templateUrl: './seo-settings.component.html',
  styleUrl: './seo-settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeoSettingsComponent {}
