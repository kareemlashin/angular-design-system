import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-import-users',
  imports: [CommonModule],
  templateUrl: './import-users.component.html',
  styleUrl: './import-users.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImportUsersComponent {}
