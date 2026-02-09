import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContainerComponent, StackComponent } from '@design-system/components/layout';
import { HeadingComponent, TextComponent } from '@design-system/components/typography';
import { CardComponent, CardHeaderComponent, CardContentComponent } from '@design-system/components/card';
import { TableContainerComponent, TableColumn } from '@design-system/components/table';

@Component({
  selector: 'app-dashboard',
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
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  stats = [
    { label: 'Total Visitors', value: '245,891', change: '+12.5%' },
    { label: 'Page Views', value: '1,234,567', change: '+8.3%' },
    { label: 'Bounce Rate', value: '34.2%', change: '-2.1%' },
    { label: 'Avg Session', value: '4m 32s', change: '+5.7%' },
  ];

  trafficData = [
    { page: '/home', visitors: 45231, views: 67845, bounceRate: '32.1%', avgTime: '3m 45s' },
    { page: '/products', visitors: 38456, views: 52341, bounceRate: '28.5%', avgTime: '5m 12s' },
    { page: '/about', visitors: 12567, views: 15234, bounceRate: '45.2%', avgTime: '2m 18s' },
    { page: '/contact', visitors: 8934, views: 10123, bounceRate: '38.7%', avgTime: '1m 56s' },
    { page: '/blog', visitors: 23456, views: 34567, bounceRate: '25.3%', avgTime: '6m 34s' },
  ];

  trafficColumns: TableColumn[] = [
    { key: 'page', label: 'Page' },
    { key: 'visitors', label: 'Visitors' },
    { key: 'views', label: 'Views' },
    { key: 'bounceRate', label: 'Bounce Rate' },
    { key: 'avgTime', label: 'Avg Time' },
  ];
}
