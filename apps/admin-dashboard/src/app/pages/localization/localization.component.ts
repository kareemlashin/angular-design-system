import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-localization',
  imports: [CommonModule],
  templateUrl: './localization.component.html',
  styleUrl: './localization.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocalizationComponent {}
