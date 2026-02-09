import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-import-export',
  imports: [CommonModule],
  templateUrl: './import-export.component.html',
  styleUrl: './import-export.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImportExportComponent {}
