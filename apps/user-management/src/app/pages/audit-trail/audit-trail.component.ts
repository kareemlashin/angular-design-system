import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-audit-trail',
  imports: [CommonModule],
  templateUrl: './audit-trail.component.html',
  styleUrl: './audit-trail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuditTrailComponent {}
