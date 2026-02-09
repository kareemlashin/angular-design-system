import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContainerComponent, StackComponent } from '@design-system/components/layout';
import { HeadingComponent, TextComponent } from '@design-system/components/typography';
import { CardComponent, CardHeaderComponent, CardContentComponent, CardFooterComponent } from '@design-system/components/card';
import { InputComponent } from '@design-system/components/input';
import { CheckboxComponent } from '@design-system/components/checkbox';
import { ButtonComponent } from '@design-system/components/button';

@Component({
  selector: 'app-login',
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
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  email = signal('');
  password = signal('');
  rememberMe = signal(false);

  handleLogin(): void {
    console.log('Login:', this.email(), this.password(), this.rememberMe());
  }
}
