import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-important',
  imports: [CommonModule],
  templateUrl: './important.component.html',
  styleUrl: './important.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImportantComponent {}
