import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-traffic-sources',
  imports: [CommonModule],
  templateUrl: './traffic-sources.component.html',
  styleUrl: './traffic-sources.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrafficSourcesComponent {}
