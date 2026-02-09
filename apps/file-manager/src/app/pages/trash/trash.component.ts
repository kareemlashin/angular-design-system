import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trash',
  imports: [CommonModule],
  templateUrl: './trash.component.html',
  styleUrl: './trash.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrashComponent {}
