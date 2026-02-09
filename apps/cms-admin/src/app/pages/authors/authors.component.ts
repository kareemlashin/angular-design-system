import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-authors',
  imports: [CommonModule],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorsComponent {}
