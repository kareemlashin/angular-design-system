import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-archived',
  imports: [CommonModule],
  templateUrl: './archived.component.html',
  styleUrl: './archived.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArchivedComponent {}
