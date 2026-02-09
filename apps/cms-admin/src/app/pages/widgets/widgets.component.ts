import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widgets',
  imports: [CommonModule],
  templateUrl: './widgets.component.html',
  styleUrl: './widgets.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetsComponent {}
