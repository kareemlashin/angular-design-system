import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-reports',
  imports: [CommonModule],
  templateUrl: './custom-reports.component.html',
  styleUrl: './custom-reports.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomReportsComponent {}
