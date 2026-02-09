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
    { id: 'dashboard', label: '📊 Dashboard', route: '/dashboard' },
    { id: 'realtime', label: '⚡ Realtime Analytics', route: '/realtime-analytics' },
    { id: 'pages', label: '📄 Page Analytics', route: '/page-analytics' },
    { id: 'traffic', label: '🚦 Traffic Sources', route: '/traffic-sources' },
    { id: 'audience', label: '👥 Audience Demographics', route: '/audience-demographics' },
    { id: 'behavior', label: '🔄 Behavior Flow', route: '/behavior-flow' },
    { id: 'funnels', label: '🎯 Conversion Funnels', route: '/conversion-funnels' },
    { id: 'goals', label: '🏆 Goals', route: '/goals' },
    { id: 'events', label: '📌 Event Tracking', route: '/event-tracking' },
    { id: 'custom', label: '📝 Custom Reports', route: '/custom-reports' },
    { id: 'scheduled', label: '⏰ Scheduled Reports', route: '/scheduled-reports' },
    { id: 'export', label: '💾 Export', route: '/export' },
    { id: 'performance', label: '⚙️ Performance', route: '/performance' },
    { id: 'errors', label: '🐛 Error Tracking', route: '/error-tracking' },
    { id: 'abtests', label: '🧪 A/B Tests', route: '/ab-tests' },
    { id: 'retention', label: '🔁 User Retention', route: '/user-retention' },
    { id: 'revenue', label: '💰 Revenue Analytics', route: '/revenue-analytics' },
    { id: 'heatmaps', label: '🔥 Heatmaps', route: '/heatmaps' },
    { id: 'sessions', label: '🎥 Session Recordings', route: '/session-recordings' },
    { id: 'api', label: '🔌 API Stats', route: '/api-stats' },
  ];

  constructor(private router: Router) {}
}
