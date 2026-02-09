import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/layout.component').then((m) => m.LayoutComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'products-list',
        loadComponent: () =>
          import('./pages/products-list/products-list.component').then(
            (m) => m.ProductsListComponent
          ),
      },
      {
        path: 'add-product',
        loadComponent: () =>
          import('./pages/add-product/add-product.component').then(
            (m) => m.AddProductComponent
          ),
      },
      {
        path: 'edit-product',
        loadComponent: () =>
          import('./pages/edit-product/edit-product.component').then(
            (m) => m.EditProductComponent
          ),
      },
      {
        path: 'categories',
        loadComponent: () =>
          import('./pages/categories/categories.component').then(
            (m) => m.CategoriesComponent
          ),
      },
      {
        path: 'orders-list',
        loadComponent: () =>
          import('./pages/orders-list/orders-list.component').then(
            (m) => m.OrdersListComponent
          ),
      },
      {
        path: 'order-details',
        loadComponent: () =>
          import('./pages/order-details/order-details.component').then(
            (m) => m.OrderDetailsComponent
          ),
      },
      {
        path: 'customers-list',
        loadComponent: () =>
          import('./pages/customers-list/customers-list.component').then(
            (m) => m.CustomersListComponent
          ),
      },
      {
        path: 'customer-details',
        loadComponent: () =>
          import('./pages/customer-details/customer-details.component').then(
            (m) => m.CustomerDetailsComponent
          ),
      },
      {
        path: 'inventory',
        loadComponent: () =>
          import('./pages/inventory/inventory.component').then(
            (m) => m.InventoryComponent
          ),
      },
      {
        path: 'discounts',
        loadComponent: () =>
          import('./pages/discounts/discounts.component').then(
            (m) => m.DiscountsComponent
          ),
      },
      {
        path: 'shipping',
        loadComponent: () =>
          import('./pages/shipping/shipping.component').then(
            (m) => m.ShippingComponent
          ),
      },
      {
        path: 'payment',
        loadComponent: () =>
          import('./pages/payment/payment.component').then(
            (m) => m.PaymentComponent
          ),
      },
      {
        path: 'returns',
        loadComponent: () =>
          import('./pages/returns/returns.component').then(
            (m) => m.ReturnsComponent
          ),
      },
      {
        path: 'reviews',
        loadComponent: () =>
          import('./pages/reviews/reviews.component').then(
            (m) => m.ReviewsComponent
          ),
      },
      {
        path: 'reports',
        loadComponent: () =>
          import('./pages/reports/reports.component').then(
            (m) => m.ReportsComponent
          ),
      },
      {
        path: 'cart-analytics',
        loadComponent: () =>
          import('./pages/cart-analytics/cart-analytics.component').then(
            (m) => m.CartAnalyticsComponent
          ),
      },
      {
        path: 'email-marketing',
        loadComponent: () =>
          import('./pages/email-marketing/email-marketing.component').then(
            (m) => m.EmailMarketingComponent
          ),
      },
      {
        path: 'tax-settings',
        loadComponent: () =>
          import('./pages/tax-settings/tax-settings.component').then(
            (m) => m.TaxSettingsComponent
          ),
      },
      {
        path: 'store-settings',
        loadComponent: () =>
          import('./pages/store-settings/store-settings.component').then(
            (m) => m.StoreSettingsComponent
          ),
      },
    ],
  },
];
