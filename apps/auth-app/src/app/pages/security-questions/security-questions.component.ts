import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-security-questions',
  imports: [CommonModule],
  templateUrl: './security-questions.component.html',
  styleUrl: './security-questions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecurityQuestionsComponent {}
