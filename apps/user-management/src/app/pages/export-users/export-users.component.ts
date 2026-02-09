import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-export-users',
  imports: [CommonModule],
  templateUrl: './export-users.component.html',
  styleUrl: './export-users.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExportUsersComponent {}
