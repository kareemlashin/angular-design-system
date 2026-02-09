import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mentions',
  imports: [CommonModule],
  templateUrl: './mentions.component.html',
  styleUrl: './mentions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MentionsComponent {}
