import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-files',
  imports: [CommonModule],
  templateUrl: './my-files.component.html',
  styleUrl: './my-files.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyFilesComponent {}
