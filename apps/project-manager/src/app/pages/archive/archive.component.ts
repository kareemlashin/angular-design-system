import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-archive',
  imports: [CommonModule],
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArchiveComponent {}
