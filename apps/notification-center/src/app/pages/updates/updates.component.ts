import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-updates',
  imports: [CommonModule],
  templateUrl: './updates.component.html',
  styleUrl: './updates.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdatesComponent {}
