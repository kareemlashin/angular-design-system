import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ab-tests',
  imports: [CommonModule],
  templateUrl: './ab-tests.component.html',
  styleUrl: './ab-tests.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbTestsComponent {}
