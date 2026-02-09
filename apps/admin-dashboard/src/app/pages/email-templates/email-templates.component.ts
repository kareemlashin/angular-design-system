import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email-templates',
  imports: [CommonModule],
  templateUrl: './email-templates.component.html',
  styleUrl: './email-templates.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailTemplatesComponent {}
