import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-returns',
  imports: [CommonModule],
  templateUrl: './returns.component.html',
  styleUrl: './returns.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReturnsComponent {}
