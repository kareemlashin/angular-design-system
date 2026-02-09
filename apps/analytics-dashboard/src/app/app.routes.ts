import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/layout.component').then((m) => m.LayoutComponent),
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'realtime-analytics',
        loadComponent: () =>
          import('./pages/realtime-analytics/realtime-analytics.component').then(
            (m) => m.RealtimeAnalyticsComponent
          ),
      },
      {
        path: 'page-analytics',
        loadComponent: () =>
          import('./pages/page-analytics/page-analytics.component').then(
            (m) => m.PageAnalyticsComponent
          ),
      },
      {
        path: 'traffic-sources',
        loadComponent: () =>
          import('./pages/traffic-sources/traffic-sources.component').then(
            (m) => m.TrafficSourcesComponent
          ),
      },
      {
        path: 'audience-demographics',
        loadComponent: () =>
          import('./pages/audience-demographics/audience-demographics.component').then(
            (m) => m.AudienceDemographicsComponent
          ),
      },
      {
        path: 'behavior-flow',
        loadComponent: () =>
          import('./pages/behavior-flow/behavior-flow.component').then(
            (m) => m.BehaviorFlowComponent
          ),
      },
      {
        path: 'conversion-funnels',
        loadComponent: () =>
          import('./pages/conversion-funnels/conversion-funnels.component').then(
            (m) => m.ConversionFunnelsComponent
          ),
      },
      {
        path: 'goals',
        loadComponent: () =>
          import('./pages/goals/goals.component').then(
            (m) => m.GoalsComponent
          ),
      },
      {
        path: 'event-tracking',
        loadComponent: () =>
          import('./pages/event-tracking/event-tracking.component').then(
            (m) => m.EventTrackingComponent
          ),
      },
      {
        path: 'custom-reports',
        loadComponent: () =>
          import('./pages/custom-reports/custom-reports.component').then(
            (m) => m.CustomReportsComponent
          ),
      },
      {
        path: 'scheduled-reports',
        loadComponent: () =>
          import('./pages/scheduled-reports/scheduled-reports.component').then(
            (m) => m.ScheduledReportsComponent
          ),
      },
      {
        path: 'export',
        loadComponent: () =>
          import('./pages/export/export.component').then(
            (m) => m.ExportComponent
          ),
      },
      {
        path: 'performance',
        loadComponent: () =>
          import('./pages/performance/performance.component').then(
            (m) => m.PerformanceComponent
          ),
      },
      {
        path: 'error-tracking',
        loadComponent: () =>
          import('./pages/error-tracking/error-tracking.component').then(
            (m) => m.ErrorTrackingComponent
          ),
      },
      {
        path: 'ab-tests',
        loadComponent: () =>
          import('./pages/ab-tests/ab-tests.component').then(
            (m) => m.AbTestsComponent
          ),
      },
      {
        path: 'user-retention',
        loadComponent: () =>
          import('./pages/user-retention/user-retention.component').then(
            (m) => m.UserRetentionComponent
          ),
      },
      {
        path: 'revenue-analytics',
        loadComponent: () =>
          import('./pages/revenue-analytics/revenue-analytics.component').then(
            (m) => m.RevenueAnalyticsComponent
          ),
      },
      {
        path: 'heatmaps',
        loadComponent: () =>
          import('./pages/heatmaps/heatmaps.component').then(
            (m) => m.HeatmapsComponent
          ),
      },
      {
        path: 'session-recordings',
        loadComponent: () =>
          import('./pages/session-recordings/session-recordings.component').then(
            (m) => m.SessionRecordingsComponent
          ),
      },
      {
        path: 'api-stats',
        loadComponent: () =>
          import('./pages/api-stats/api-stats.component').then(
            (m) => m.ApiStatsComponent
          ),
      },
    ],
  },
];
