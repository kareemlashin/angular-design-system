import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-session-recordings',
  imports: [CommonModule],
  templateUrl: './session-recordings.component.html',
  styleUrl: './session-recordings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SessionRecordingsComponent {}
