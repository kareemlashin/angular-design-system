import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-behavior-flow',
  imports: [CommonModule],
  templateUrl: './behavior-flow.component.html',
  styleUrl: './behavior-flow.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BehaviorFlowComponent {}
