import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-audience-demographics',
  imports: [CommonModule],
  templateUrl: './audience-demographics.component.html',
  styleUrl: './audience-demographics.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudienceDemographicsComponent {}
