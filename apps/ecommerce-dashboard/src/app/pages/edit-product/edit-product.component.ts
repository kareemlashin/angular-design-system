import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-product',
  imports: [CommonModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditProductComponent {}
