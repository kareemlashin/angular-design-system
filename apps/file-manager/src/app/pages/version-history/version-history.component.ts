import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-version-history',
  imports: [CommonModule],
  templateUrl: './version-history.component.html',
  styleUrl: './version-history.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VersionHistoryComponent {}
