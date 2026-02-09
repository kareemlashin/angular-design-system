import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-activity',
  imports: [CommonModule],
  templateUrl: './user-activity.component.html',
  styleUrl: './user-activity.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserActivityComponent {}
