import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pages-list',
  imports: [CommonModule],
  templateUrl: './pages-list.component.html',
  styleUrl: './pages-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagesListComponent {}
