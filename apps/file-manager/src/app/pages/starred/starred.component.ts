import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-starred',
  imports: [CommonModule],
  templateUrl: './starred.component.html',
  styleUrl: './starred.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarredComponent {}
