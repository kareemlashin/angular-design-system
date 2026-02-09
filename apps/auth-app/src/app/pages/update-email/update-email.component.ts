import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-email',
  imports: [CommonModule],
  templateUrl: './update-email.component.html',
  styleUrl: './update-email.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateEmailComponent {}
