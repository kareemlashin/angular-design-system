import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeadingComponent, TextComponent } from '@design-system/components/typography';
import { ContainerComponent, StackComponent } from '@design-system/components/layout';
import { CardComponent, CardHeaderComponent, CardContentComponent } from '@design-system/components/card';
import { TableContainerComponent, TableColumn } from '@design-system/components/table';

interface RecentOrder {
  orderId: string;
  customer: string;
  total: string;
  items: number;
  status: string;
  date: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [
    HeadingComponent,
    TextComponent,
    ContainerComponent,
    StackComponent,
    CardComponent,
    CardHeaderComponent,
    CardContentComponent,
    TableContainerComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DashboardComponent {
  recentOrdersColumns: TableColumn<RecentOrder>[] = [
    { key: 'orderId', header: 'Order ID', sortable: true },
    { key: 'customer', header: 'Customer', sortable: true },
    { key: 'total', header: 'Total', sortable: true },
    { key: 'items', header: 'Items', sortable: false },
    { key: 'status', header: 'Status', sortable: true },
    { key: 'date', header: 'Date', sortable: true },
  ];

  recentOrders: RecentOrder[] = [
    { orderId: '#ORD-1001', customer: 'John Smith', total: '$245.50', items: 3, status: 'Completed', date: '2024-02-08' },
    { orderId: '#ORD-1002', customer: 'Sarah Johnson', total: '$89.99', items: 1, status: 'Processing', date: '2024-02-08' },
    { orderId: '#ORD-1003', customer: 'Mike Brown', total: '$450.00', items: 5, status: 'Shipped', date: '2024-02-07' },
    { orderId: '#ORD-1004', customer: 'Emily Davis', total: '$125.75', items: 2, status: 'Completed', date: '2024-02-07' },
    { orderId: '#ORD-1005', customer: 'Chris Wilson', total: '$310.20', items: 4, status: 'Processing', date: '2024-02-06' },
  ];
}
