import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email-digests',
  imports: [CommonModule],
  templateUrl: './email-digests.component.html',
  styleUrl: './email-digests.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailDigestsComponent {}
