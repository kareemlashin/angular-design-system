import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-connected-apps',
  imports: [CommonModule],
  templateUrl: './connected-apps.component.html',
  styleUrl: './connected-apps.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConnectedAppsComponent {}
