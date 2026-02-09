import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notifications-mgmt',
  imports: [CommonModule],
  templateUrl: './notifications-mgmt.component.html',
  styleUrl: './notifications-mgmt.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationsMgmtComponent {}
