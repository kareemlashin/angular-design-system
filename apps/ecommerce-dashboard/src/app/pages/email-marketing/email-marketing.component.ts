import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email-marketing',
  imports: [CommonModule],
  templateUrl: './email-marketing.component.html',
  styleUrl: './email-marketing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailMarketingComponent {}
