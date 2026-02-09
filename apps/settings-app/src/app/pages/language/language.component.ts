import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language',
  imports: [CommonModule],
  templateUrl: './language.component.html',
  styleUrl: './language.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageComponent {}
