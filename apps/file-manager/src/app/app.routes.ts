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
        path: 'my-files',
        loadComponent: () =>
          import('./pages/my-files/my-files.component').then(
            (m) => m.MyFilesComponent
          ),
      },
      {
        path: 'folder-view',
        loadComponent: () =>
          import('./pages/folder-view/folder-view.component').then(
            (m) => m.FolderViewComponent
          ),
      },
      {
        path: 'recent',
        loadComponent: () =>
          import('./pages/recent/recent.component').then(
            (m) => m.RecentComponent
          ),
      },
      {
        path: 'starred',
        loadComponent: () =>
          import('./pages/starred/starred.component').then(
            (m) => m.StarredComponent
          ),
      },
      {
        path: 'shared',
        loadComponent: () =>
          import('./pages/shared/shared.component').then(
            (m) => m.SharedComponent
          ),
      },
      {
        path: 'trash',
        loadComponent: () =>
          import('./pages/trash/trash.component').then((m) => m.TrashComponent),
      },
      {
        path: 'upload',
        loadComponent: () =>
          import('./pages/upload/upload.component').then(
            (m) => m.UploadComponent
          ),
      },
      {
        path: 'file-details',
        loadComponent: () =>
          import('./pages/file-details/file-details.component').then(
            (m) => m.FileDetailsComponent
          ),
      },
      {
        path: 'preview',
        loadComponent: () =>
          import('./pages/preview/preview.component').then(
            (m) => m.PreviewComponent
          ),
      },
      {
        path: 'search',
        loadComponent: () =>
          import('./pages/search/search.component').then(
            (m) => m.SearchComponent
          ),
      },
      {
        path: 'tags',
        loadComponent: () =>
          import('./pages/tags/tags.component').then((m) => m.TagsComponent),
      },
      {
        path: 'collections',
        loadComponent: () =>
          import('./pages/collections/collections.component').then(
            (m) => m.CollectionsComponent
          ),
      },
      {
        path: 'storage',
        loadComponent: () =>
          import('./pages/storage/storage.component').then(
            (m) => m.StorageComponent
          ),
      },
      {
        path: 'version-history',
        loadComponent: () =>
          import('./pages/version-history/version-history.component').then(
            (m) => m.VersionHistoryComponent
          ),
      },
      {
        path: 'share-settings',
        loadComponent: () =>
          import('./pages/share-settings/share-settings.component').then(
            (m) => m.ShareSettingsComponent
          ),
      },
      {
        path: 'activity-log',
        loadComponent: () =>
          import('./pages/activity-log/activity-log.component').then(
            (m) => m.ActivityLogComponent
          ),
      },
      {
        path: 'batch-operations',
        loadComponent: () =>
          import('./pages/batch-operations/batch-operations.component').then(
            (m) => m.BatchOperationsComponent
          ),
      },
      {
        path: 'integrations',
        loadComponent: () =>
          import('./pages/integrations/integrations.component').then(
            (m) => m.IntegrationsComponent
          ),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./pages/settings/settings.component').then(
            (m) => m.SettingsComponent
          ),
      },
    ],
  },
];
