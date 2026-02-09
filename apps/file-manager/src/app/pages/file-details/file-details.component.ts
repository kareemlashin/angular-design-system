import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-file-details',
  imports: [CommonModule],
  templateUrl: './file-details.component.html',
  styleUrl: './file-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileDetailsComponent {}
