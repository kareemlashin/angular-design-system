import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme',
  imports: [CommonModule],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeComponent {}
