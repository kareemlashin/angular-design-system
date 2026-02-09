import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upload-media',
  imports: [CommonModule],
  templateUrl: './upload-media.component.html',
  styleUrl: './upload-media.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadMediaComponent {}
