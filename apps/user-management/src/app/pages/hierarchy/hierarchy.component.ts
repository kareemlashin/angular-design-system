import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hierarchy',
  imports: [CommonModule],
  templateUrl: './hierarchy.component.html',
  styleUrl: './hierarchy.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HierarchyComponent {}
