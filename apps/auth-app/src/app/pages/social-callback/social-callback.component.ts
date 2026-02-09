import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-callback',
  imports: [CommonModule],
  templateUrl: './social-callback.component.html',
  styleUrl: './social-callback.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialCallbackComponent {}
