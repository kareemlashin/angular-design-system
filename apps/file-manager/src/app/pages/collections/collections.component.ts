import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collections',
  imports: [CommonModule],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollectionsComponent {}
