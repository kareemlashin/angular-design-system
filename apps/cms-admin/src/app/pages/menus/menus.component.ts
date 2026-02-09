import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menus',
  imports: [CommonModule],
  templateUrl: './menus.component.html',
  styleUrl: './menus.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenusComponent {}
