import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reminders',
  imports: [CommonModule],
  templateUrl: './reminders.component.html',
  styleUrl: './reminders.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemindersComponent {}
