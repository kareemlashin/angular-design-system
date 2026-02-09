import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shared',
  imports: [CommonModule],
  templateUrl: './shared.component.html',
  styleUrl: './shared.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedComponent {}
