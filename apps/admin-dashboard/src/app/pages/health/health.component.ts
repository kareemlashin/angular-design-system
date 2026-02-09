import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-health',
  imports: [CommonModule],
  templateUrl: './health.component.html',
  styleUrl: './health.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HealthComponent {}
