import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heatmaps',
  imports: [CommonModule],
  templateUrl: './heatmaps.component.html',
  styleUrl: './heatmaps.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeatmapsComponent {}
