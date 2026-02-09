import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-integrations',
  imports: [CommonModule],
  templateUrl: './integrations.component.html',
  styleUrl: './integrations.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntegrationsComponent {}
