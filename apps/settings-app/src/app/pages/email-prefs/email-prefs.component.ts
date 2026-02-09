import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email-prefs',
  imports: [CommonModule],
  templateUrl: './email-prefs.component.html',
  styleUrl: './email-prefs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailPrefsComponent {}
