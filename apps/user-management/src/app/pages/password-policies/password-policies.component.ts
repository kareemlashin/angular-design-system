import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-policies',
  imports: [CommonModule],
  templateUrl: './password-policies.component.html',
  styleUrl: './password-policies.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordPoliciesComponent {}
