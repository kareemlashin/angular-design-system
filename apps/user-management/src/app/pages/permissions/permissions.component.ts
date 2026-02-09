import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-permissions',
  imports: [CommonModule],
  templateUrl: './permissions.component.html',
  styleUrl: './permissions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PermissionsComponent {}
