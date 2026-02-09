import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subscribers',
  imports: [CommonModule],
  templateUrl: './subscribers.component.html',
  styleUrl: './subscribers.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubscribersComponent {}
