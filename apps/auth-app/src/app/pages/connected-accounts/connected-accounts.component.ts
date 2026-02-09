import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-connected-accounts',
  imports: [CommonModule],
  templateUrl: './connected-accounts.component.html',
  styleUrl: './connected-accounts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConnectedAccountsComponent {}
