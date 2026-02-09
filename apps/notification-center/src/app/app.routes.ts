import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/layout.component').then((m) => m.LayoutComponent),
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'unread',
        loadComponent: () =>
          import('./pages/unread/unread.component').then(
            (m) => m.UnreadComponent
          ),
      },
      {
        path: 'read',
        loadComponent: () =>
          import('./pages/read/read.component').then((m) => m.ReadComponent),
      },
      {
        path: 'important',
        loadComponent: () =>
          import('./pages/important/important.component').then(
            (m) => m.ImportantComponent
          ),
      },
      {
        path: 'archived',
        loadComponent: () =>
          import('./pages/archived/archived.component').then(
            (m) => m.ArchivedComponent
          ),
      },
      {
        path: 'alerts',
        loadComponent: () =>
          import('./pages/alerts/alerts.component').then(
            (m) => m.AlertsComponent
          ),
      },
      {
        path: 'mentions',
        loadComponent: () =>
          import('./pages/mentions/mentions.component').then(
            (m) => m.MentionsComponent
          ),
      },
      {
        path: 'comments',
        loadComponent: () =>
          import('./pages/comments/comments.component').then(
            (m) => m.CommentsComponent
          ),
      },
      {
        path: 'social',
        loadComponent: () =>
          import('./pages/social/social.component').then(
            (m) => m.SocialComponent
          ),
      },
      {
        path: 'updates',
        loadComponent: () =>
          import('./pages/updates/updates.component').then(
            (m) => m.UpdatesComponent
          ),
      },
      {
        path: 'preferences',
        loadComponent: () =>
          import('./pages/preferences/preferences.component').then(
            (m) => m.PreferencesComponent
          ),
      },
      {
        path: 'push-settings',
        loadComponent: () =>
          import('./pages/push-settings/push-settings.component').then(
            (m) => m.PushSettingsComponent
          ),
      },
      {
        path: 'email-digests',
        loadComponent: () =>
          import('./pages/email-digests/email-digests.component').then(
            (m) => m.EmailDigestsComponent
          ),
      },
      {
        path: 'mute-settings',
        loadComponent: () =>
          import('./pages/mute-settings/mute-settings.component').then(
            (m) => m.MuteSettingsComponent
          ),
      },
      {
        path: 'schedule',
        loadComponent: () =>
          import('./pages/schedule/schedule.component').then(
            (m) => m.ScheduleComponent
          ),
      },
      {
        path: 'templates',
        loadComponent: () =>
          import('./pages/templates/templates.component').then(
            (m) => m.TemplatesComponent
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
        path: 'history',
        loadComponent: () =>
          import('./pages/history/history.component').then(
            (m) => m.HistoryComponent
          ),
      },
      {
        path: 'activity',
        loadComponent: () =>
          import('./pages/activity/activity.component').then(
            (m) => m.ActivityComponent
          ),
      },
      {
        path: 'reminders',
        loadComponent: () =>
          import('./pages/reminders/reminders.component').then(
            (m) => m.RemindersComponent
          ),
      },
    ],
  },
];
