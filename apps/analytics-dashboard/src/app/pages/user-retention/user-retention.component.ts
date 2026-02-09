import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-retention',
  imports: [CommonModule],
  templateUrl: './user-retention.component.html',
  styleUrl: './user-retention.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserRetentionComponent {}
