import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-read',
  imports: [CommonModule],
  templateUrl: './read.component.html',
  styleUrl: './read.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReadComponent {}
