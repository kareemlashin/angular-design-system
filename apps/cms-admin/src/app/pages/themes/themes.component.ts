import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-themes',
  imports: [CommonModule],
  templateUrl: './themes.component.html',
  styleUrl: './themes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemesComponent {}
