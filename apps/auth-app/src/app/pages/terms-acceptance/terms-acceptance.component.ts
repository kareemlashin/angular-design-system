import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terms-acceptance',
  imports: [CommonModule],
  templateUrl: './terms-acceptance.component.html',
  styleUrl: './terms-acceptance.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TermsAcceptanceComponent {}
