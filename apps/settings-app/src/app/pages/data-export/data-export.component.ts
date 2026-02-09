import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-export',
  imports: [CommonModule],
  templateUrl: './data-export.component.html',
  styleUrl: './data-export.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataExportComponent {}
