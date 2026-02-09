import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conversion-funnels',
  imports: [CommonModule],
  templateUrl: './conversion-funnels.component.html',
  styleUrl: './conversion-funnels.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConversionFunnelsComponent {}
