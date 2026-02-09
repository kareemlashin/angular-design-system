import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-advanced',
  imports: [CommonModule],
  templateUrl: './advanced.component.html',
  styleUrl: './advanced.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvancedComponent {}
