import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ContainerComponent, StackComponent } from '@design-system/components/layout';
import { HeadingComponent, TextComponent } from '@design-system/components/typography';
import { CardComponent, CardHeaderComponent, CardContentComponent, CardFooterComponent } from '@design-system/components/card';
import { InputComponent } from '@design-system/components/input';
import { ButtonComponent } from '@design-system/components/button';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
    ContainerComponent,
    StackComponent,
    HeadingComponent,
    TextComponent,
    CardComponent,
    CardHeaderComponent,
    CardContentComponent,
    CardFooterComponent,
    InputComponent,
    ButtonComponent,
  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetPasswordComponent {
  newPassword = signal('');
  confirmPassword = signal('');

  handleResetPassword(): void {
    console.log('Reset password:', this.newPassword(), this.confirmPassword());
  }
}
