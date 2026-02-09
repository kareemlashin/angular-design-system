import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-details',
  imports: [CommonModule],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerDetailsComponent {}
