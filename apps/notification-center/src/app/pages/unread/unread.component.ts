import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-unread',
  imports: [CommonModule],
  templateUrl: './unread.component.html',
  styleUrl: './unread.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnreadComponent {}
