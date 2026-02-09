import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContainerComponent, StackComponent } from '@design-system/components/layout';
import { HeadingComponent, TextComponent } from '@design-system/components/typography';
import { CardComponent, CardHeaderComponent, CardContentComponent, CardFooterComponent } from '@design-system/components/card';
import { InputComponent } from '@design-system/components/input';
import { CheckboxComponent } from '@design-system/components/checkbox';
import { ButtonComponent } from '@design-system/components/button';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink,
    ContainerComponent,
    StackComponent,
    HeadingComponent,
    TextComponent,
    CardComponent,
    CardHeaderComponent,
    CardContentComponent,
    CardFooterComponent,
    InputComponent,
    CheckboxComponent,
    ButtonComponent,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  firstName = signal('');
  lastName = signal('');
  email = signal('');
  password = signal('');
  confirmPassword = signal('');
  agreeToTerms = signal(false);

  handleRegister(): void {
    console.log('Register:', {
      firstName: this.firstName(),
      lastName: this.lastName(),
      email: this.email(),
      password: this.password(),
      confirmPassword: this.confirmPassword(),
      agreeToTerms: this.agreeToTerms(),
    });
  }
}
