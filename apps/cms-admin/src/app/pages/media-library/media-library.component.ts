import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-media-library',
  imports: [CommonModule],
  templateUrl: './media-library.component.html',
  styleUrl: './media-library.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaLibraryComponent {}
