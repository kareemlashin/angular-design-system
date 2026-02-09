import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-milestones',
  imports: [CommonModule],
  templateUrl: './milestones.component.html',
  styleUrl: './milestones.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MilestonesComponent {}
