import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-keys',
  imports: [CommonModule],
  templateUrl: './api-keys.component.html',
  styleUrl: './api-keys.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApiKeysComponent {}
