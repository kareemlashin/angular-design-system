import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-export',
  imports: [CommonModule],
  templateUrl: './export.component.html',
  styleUrl: './export.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExportComponent {}
