import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContainerComponent, StackComponent } from '@design-system/components/layout';
import { HeadingComponent, TextComponent } from '@design-system/components/typography';
import { CardComponent, CardHeaderComponent, CardContentComponent } from '@design-system/components/card';
import { TableContainerComponent, TableColumn } from '@design-system/components/table';

@Component({
  selector: 'app-traffic-sources',
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
  templateUrl: './traffic-sources.component.html',
  styleUrl: './traffic-sources.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrafficSourcesComponent {
  sourceData = [
    { source: 'Direct', visitors: 89234, sessions: 112456, bounceRate: '31.5%', conversion: '3.2%' },
    { source: 'Google Organic', visitors: 67845, sessions: 89234, bounceRate: '28.7%', conversion: '4.1%' },
    { source: 'Social Media', visitors: 45678, sessions: 56789, bounceRate: '42.3%', conversion: '2.8%' },
    { source: 'Email Campaign', visitors: 34567, sessions: 41234, bounceRate: '25.1%', conversion: '5.6%' },
    { source: 'Referral', visitors: 23456, sessions: 28934, bounceRate: '35.8%', conversion: '3.7%' },
    { source: 'Google Ads', visitors: 18765, sessions: 22345, bounceRate: '38.2%', conversion: '4.9%' },
    { source: 'Facebook Ads', visitors: 15678, sessions: 19234, bounceRate: '40.5%', conversion: '3.3%' },
    { source: 'LinkedIn', visitors: 12345, sessions: 15678, bounceRate: '32.9%', conversion: '4.5%' },
  ];

  columns: TableColumn[] = [
    { key: 'source', label: 'Source' },
    { key: 'visitors', label: 'Visitors' },
    { key: 'sessions', label: 'Sessions' },
    { key: 'bounceRate', label: 'Bounce Rate' },
    { key: 'conversion', label: 'Conversion' },
  ];
}
