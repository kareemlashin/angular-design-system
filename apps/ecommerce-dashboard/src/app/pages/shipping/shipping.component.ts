import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shipping',
  imports: [CommonModule],
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShippingComponent {}
