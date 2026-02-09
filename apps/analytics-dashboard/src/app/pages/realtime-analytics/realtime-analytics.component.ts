import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContainerComponent, StackComponent } from '@design-system/components/layout';
import { HeadingComponent, TextComponent } from '@design-system/components/typography';
import { CardComponent, CardHeaderComponent, CardContentComponent } from '@design-system/components/card';
import { TableContainerComponent, TableColumn } from '@design-system/components/table';

@Component({
  selector: 'app-realtime-analytics',
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
  templateUrl: './realtime-analytics.component.html',
  styleUrl: './realtime-analytics.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RealtimeAnalyticsComponent {
  stats = [
    { label: 'Active Users Now', value: '847' },
    { label: 'Pages/Min', value: '1,234' },
    { label: 'Events/Min', value: '456' },
  ];

  activePages = [
    { url: '/home', activeUsers: 234, events: 567 },
    { url: '/products/widgets', activeUsers: 156, events: 389 },
    { url: '/checkout', activeUsers: 89, events: 234 },
    { url: '/blog/latest', activeUsers: 67, events: 123 },
    { url: '/about', activeUsers: 45, events: 78 },
  ];

  columns: TableColumn[] = [
    { key: 'url', label: 'URL' },
    { key: 'activeUsers', label: 'Active Users' },
    { key: 'events', label: 'Events' },
  ];
}
