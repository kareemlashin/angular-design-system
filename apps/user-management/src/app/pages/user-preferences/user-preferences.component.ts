import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-preferences',
  imports: [CommonModule],
  templateUrl: './user-preferences.component.html',
  styleUrl: './user-preferences.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPreferencesComponent {}
