import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-fields',
  imports: [CommonModule],
  templateUrl: './custom-fields.component.html',
  styleUrl: './custom-fields.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomFieldsComponent {}
