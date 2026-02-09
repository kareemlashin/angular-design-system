import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-folder-view',
  imports: [CommonModule],
  templateUrl: './folder-view.component.html',
  styleUrl: './folder-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FolderViewComponent {}
