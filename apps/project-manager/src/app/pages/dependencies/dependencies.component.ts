import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dependencies',
  imports: [CommonModule],
  templateUrl: './dependencies.component.html',
  styleUrl: './dependencies.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DependenciesComponent {}
