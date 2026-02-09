import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-active-sessions',
  imports: [CommonModule],
  templateUrl: './active-sessions.component.html',
  styleUrl: './active-sessions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActiveSessionsComponent {}
