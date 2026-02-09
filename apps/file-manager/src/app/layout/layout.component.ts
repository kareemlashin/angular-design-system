import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { SidenavContainerComponent, SidenavItem } from '@design-system/components/sidenav';
import { ToastContainerComponent } from '@design-system/components/toast';
import { ModalOutletComponent } from '@design-system/components/modal';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterModule,
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
    { id: 'dashboard', label: 'Dashboard', icon: '📊', route: '/dashboard' },
    { id: 'my-files', label: 'My Files', icon: '📁', route: '/my-files' },
    { id: 'folder-view', label: 'Folder View', icon: '🗂️', route: '/folder-view' },
    { id: 'recent', label: 'Recent', icon: '🕒', route: '/recent' },
    { id: 'starred', label: 'Starred', icon: '⭐', route: '/starred' },
    { id: 'shared', label: 'Shared', icon: '👥', route: '/shared' },
    { id: 'trash', label: 'Trash', icon: '🗑️', route: '/trash' },
    { id: 'upload', label: 'Upload', icon: '⬆️', route: '/upload' },
    { id: 'file-details', label: 'File Details', icon: 'ℹ️', route: '/file-details' },
    { id: 'preview', label: 'Preview', icon: '👁️', route: '/preview' },
    { id: 'search', label: 'Search', icon: '🔍', route: '/search' },
    { id: 'tags', label: 'Tags', icon: '🏷️', route: '/tags' },
    { id: 'collections', label: 'Collections', icon: '📚', route: '/collections' },
    { id: 'storage', label: 'Storage', icon: '💾', route: '/storage' },
    { id: 'version-history', label: 'Version History', icon: '📜', route: '/version-history' },
    { id: 'share-settings', label: 'Share Settings', icon: '⚙️', route: '/share-settings' },
    { id: 'activity-log', label: 'Activity Log', icon: '📋', route: '/activity-log' },
    { id: 'batch-operations', label: 'Batch Operations', icon: '📦', route: '/batch-operations' },
    { id: 'integrations', label: 'Integrations', icon: '🔗', route: '/integrations' },
    { id: 'settings', label: 'Settings', icon: '⚙️', route: '/settings' },
  ];

  constructor(private router: Router) {}

  handleNavigate(item: SidenavItem): void {
    if (item.route) {
      this.router.navigate([item.route]);
    }
  }
}
