import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContainerComponent, StackComponent } from '@design-system/components/layout';
import { HeadingComponent, TextComponent } from '@design-system/components/typography';
import { CardComponent, CardHeaderComponent, CardContentComponent } from '@design-system/components/card';
import { TableContainerComponent, TableColumn } from '@design-system/components/table';

@Component({
  selector: 'app-conversion-funnels',
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
  templateUrl: './conversion-funnels.component.html',
  styleUrl: './conversion-funnels.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConversionFunnelsComponent {
  funnelData = [
    { name: 'Signup Funnel', steps: 4, conversionRate: '45.2%', dropOff: '54.8%', total: 45231 },
    { name: 'Purchase Funnel', steps: 5, conversionRate: '32.8%', dropOff: '67.2%', total: 23456 },
    { name: 'Onboarding Funnel', steps: 3, conversionRate: '67.5%', dropOff: '32.5%', total: 18765 },
    { name: 'Free Trial Conversion', steps: 6, conversionRate: '28.3%', dropOff: '71.7%', total: 12345 },
  ];

  columns: TableColumn[] = [
    { key: 'name', label: 'Funnel Name' },
    { key: 'steps', label: 'Steps' },
    { key: 'conversionRate', label: 'Conversion Rate' },
    { key: 'dropOff', label: 'Drop-off' },
    { key: 'total', label: 'Total Users' },
  ];
}
