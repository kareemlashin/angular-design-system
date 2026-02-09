import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-project',
  imports: [CommonModule],
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateProjectComponent {}
