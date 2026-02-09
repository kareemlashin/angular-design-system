import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContainerComponent, StackComponent } from '@design-system/components/layout';
import { HeadingComponent, TextComponent } from '@design-system/components/typography';
import { CardComponent, CardHeaderComponent, CardContentComponent } from '@design-system/components/card';
import { TableContainerComponent, TableColumn } from '@design-system/components/table';

@Component({
  selector: 'app-page-analytics',
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
  templateUrl: './page-analytics.component.html',
  styleUrl: './page-analytics.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageAnalyticsComponent {
  pageData = [
    { url: '/home', views: 67845, uniqueViews: 45231, avgTime: '3m 45s', bounceRate: '32.1%', exitRate: '28.5%' },
    { url: '/products', views: 52341, uniqueViews: 38456, avgTime: '5m 12s', bounceRate: '28.5%', exitRate: '24.3%' },
    { url: '/about', views: 15234, uniqueViews: 12567, avgTime: '2m 18s', bounceRate: '45.2%', exitRate: '42.1%' },
    { url: '/contact', views: 10123, uniqueViews: 8934, avgTime: '1m 56s', bounceRate: '38.7%', exitRate: '35.6%' },
    { url: '/blog', views: 34567, uniqueViews: 23456, avgTime: '6m 34s', bounceRate: '25.3%', exitRate: '22.8%' },
    { url: '/pricing', views: 28934, uniqueViews: 21456, avgTime: '4m 23s', bounceRate: '30.5%', exitRate: '28.9%' },
    { url: '/features', views: 19876, uniqueViews: 15234, avgTime: '3m 56s', bounceRate: '33.2%', exitRate: '31.5%' },
    { url: '/docs', views: 42345, uniqueViews: 28765, avgTime: '8m 12s', bounceRate: '18.4%', exitRate: '16.7%' },
    { url: '/support', views: 16789, uniqueViews: 13456, avgTime: '5m 34s', bounceRate: '29.8%', exitRate: '27.3%' },
    { url: '/careers', views: 8934, uniqueViews: 7234, avgTime: '3m 12s', bounceRate: '41.5%', exitRate: '39.2%' },
    { url: '/partners', views: 12456, uniqueViews: 9876, avgTime: '4m 45s', bounceRate: '35.6%', exitRate: '33.8%' },
    { url: '/testimonials', views: 9876, uniqueViews: 7890, avgTime: '2m 34s', bounceRate: '38.9%', exitRate: '36.5%' },
    { url: '/case-studies', views: 14567, uniqueViews: 11234, avgTime: '7m 23s', bounceRate: '22.3%', exitRate: '20.1%' },
    { url: '/webinars', views: 11234, uniqueViews: 8765, avgTime: '15m 45s', bounceRate: '15.6%', exitRate: '14.2%' },
    { url: '/resources', views: 18765, uniqueViews: 14567, avgTime: '5m 56s', bounceRate: '27.8%', exitRate: '25.4%' },
  ];

  columns: TableColumn[] = [
    { key: 'url', label: 'Page URL' },
    { key: 'views', label: 'Views' },
    { key: 'uniqueViews', label: 'Unique Views' },
    { key: 'avgTime', label: 'Avg Time' },
    { key: 'bounceRate', label: 'Bounce Rate' },
    { key: 'exitRate', label: 'Exit Rate' },
  ];
}
