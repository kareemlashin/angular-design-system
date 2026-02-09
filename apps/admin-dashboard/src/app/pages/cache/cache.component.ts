import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cache',
  imports: [CommonModule],
  templateUrl: './cache.component.html',
  styleUrl: './cache.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CacheComponent {}
