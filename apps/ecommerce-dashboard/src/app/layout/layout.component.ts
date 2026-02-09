import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { SidenavContainerComponent, SidenavItem } from '@design-system/components/sidenav';
import { ToastContainerComponent } from '@design-system/components/toast';
import { ModalOutletComponent } from '@design-system/components/modal';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    SidenavContainerComponent,
    ToastContainerComponent,
    ModalOutletComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  menuItems: SidenavItem[] = [
    {
      id: 'dashboard',
      label: '📊 Dashboard',
      route: '/dashboard',
    },
    {
      id: 'products-list',
      label: '🛍️ Products',
      route: '/products-list',
    },
    {
      id: 'add-product',
      label: '➕ Add Product',
      route: '/add-product',
    },
    {
      id: 'edit-product',
      label: '✏️ Edit Product',
      route: '/edit-product',
    },
    {
      id: 'categories',
      label: '📁 Categories',
      route: '/categories',
    },
    {
      id: 'orders-list',
      label: '📦 Orders',
      route: '/orders-list',
    },
    {
      id: 'order-details',
      label: '📋 Order Details',
      route: '/order-details',
    },
    {
      id: 'customers-list',
      label: '👥 Customers',
      route: '/customers-list',
    },
    {
      id: 'customer-details',
      label: '👤 Customer Details',
      route: '/customer-details',
    },
    {
      id: 'inventory',
      label: '📊 Inventory',
      route: '/inventory',
    },
    {
      id: 'discounts',
      label: '🏷️ Discounts',
      route: '/discounts',
    },
    {
      id: 'shipping',
      label: '🚚 Shipping',
      route: '/shipping',
    },
    {
      id: 'payment',
      label: '💳 Payment',
      route: '/payment',
    },
    {
      id: 'returns',
      label: '↩️ Returns',
      route: '/returns',
    },
    {
      id: 'reviews',
      label: '⭐ Reviews',
      route: '/reviews',
    },
    {
      id: 'reports',
      label: '📈 Reports',
      route: '/reports',
    },
    {
      id: 'cart-analytics',
      label: '🛒 Cart Analytics',
      route: '/cart-analytics',
    },
    {
      id: 'email-marketing',
      label: '📧 Email Marketing',
      route: '/email-marketing',
    },
    {
      id: 'tax-settings',
      label: '🧾 Tax Settings',
      route: '/tax-settings',
    },
    {
      id: 'store-settings',
      label: '⚙️ Store Settings',
      route: '/store-settings',
    },
  ];

  constructor(private router: Router) {}

  onMenuItemClick(item: SidenavItem): void {
    if (item.route) {
      this.router.navigate([item.route]);
    }
  }
}
