import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-audit-reports',
  imports: [CommonModule],
  templateUrl: './audit-reports.component.html',
  styleUrl: './audit-reports.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuditReportsComponent {}
