import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-import-data',
  imports: [CommonModule],
  templateUrl: './import-data.component.html',
  styleUrl: './import-data.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImportDataComponent {}
