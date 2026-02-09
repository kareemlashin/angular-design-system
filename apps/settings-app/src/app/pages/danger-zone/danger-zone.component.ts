import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-danger-zone',
  imports: [CommonModule],
  templateUrl: './danger-zone.component.html',
  styleUrl: './danger-zone.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DangerZoneComponent {}
