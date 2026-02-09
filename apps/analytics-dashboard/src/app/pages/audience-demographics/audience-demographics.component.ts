import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContainerComponent, StackComponent } from '@design-system/components/layout';
import { HeadingComponent, TextComponent } from '@design-system/components/typography';
import { CardComponent, CardHeaderComponent, CardContentComponent } from '@design-system/components/card';
import { TableContainerComponent, TableColumn } from '@design-system/components/table';

@Component({
  selector: 'app-audience-demographics',
  imports: [
    ContainerComponent,
    StackComponent,
    HeadingComponent,
    TextComponent,
    CardComponent,
    CardHeaderComponent,
    CardContentComponent,
    TableContainerComponent,
  ],
  templateUrl: './audience-demographics.component.html',
  styleUrl: './audience-demographics.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudienceDemographicsComponent {
  countryData = [
    { country: 'United States', users: 89234, percentage: '35.2%' },
    { country: 'United Kingdom', users: 45678, percentage: '18.1%' },
    { country: 'Canada', users: 34567, percentage: '13.7%' },
    { country: 'Germany', users: 23456, percentage: '9.3%' },
    { country: 'France', users: 18765, percentage: '7.4%' },
  ];

  deviceData = [
    { device: 'Desktop', users: 112456, percentage: '44.5%' },
    { device: 'Mobile', users: 98234, percentage: '38.9%' },
    { device: 'Tablet', users: 41876, percentage: '16.6%' },
  ];

  browserData = [
    { browser: 'Chrome', users: 134567, percentage: '53.2%' },
    { browser: 'Safari', users: 67834, percentage: '26.8%' },
    { browser: 'Firefox', users: 34567, percentage: '13.7%' },
    { browser: 'Edge', users: 15698, percentage: '6.3%' },
  ];

  countryColumns: TableColumn[] = [
    { key: 'country', label: 'Country' },
    { key: 'users', label: 'Users' },
    { key: 'percentage', label: 'Percentage' },
  ];

  deviceColumns: TableColumn[] = [
    { key: 'device', label: 'Device' },
    { key: 'users', label: 'Users' },
    { key: 'percentage', label: 'Percentage' },
  ];

  browserColumns: TableColumn[] = [
    { key: 'browser', label: 'Browser' },
    { key: 'users', label: 'Users' },
    { key: 'percentage', label: 'Percentage' },
  ];
}
