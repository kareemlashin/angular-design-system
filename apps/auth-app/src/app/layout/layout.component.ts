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
      id: 'login',
      label: 'Sign In',
      icon: '🔐',
      route: '/login',
    },
    {
      id: 'register',
      label: 'Create Account',
      icon: '📝',
      route: '/register',
    },
    {
      id: 'forgot-password',
      label: 'Forgot Password',
      icon: '🔑',
      route: '/forgot-password',
    },
    {
      id: 'reset-password',
      label: 'Reset Password',
      icon: '🔄',
      route: '/reset-password',
    },
    {
      id: 'email-verification',
      label: 'Email Verification',
      icon: '📧',
      route: '/email-verification',
    },
    {
      id: 'two-factor-setup',
      label: '2FA Setup',
      icon: '🛡️',
      route: '/two-factor-setup',
    },
    {
      id: 'two-factor-verify',
      label: '2FA Verify',
      icon: '✅',
      route: '/two-factor-verify',
    },
    {
      id: 'change-password',
      label: 'Change Password',
      icon: '🔐',
      route: '/change-password',
    },
    {
      id: 'active-sessions',
      label: 'Active Sessions',
      icon: '💻',
      route: '/active-sessions',
    },
    {
      id: 'login-history',
      label: 'Login History',
      icon: '📜',
      route: '/login-history',
    },
    {
      id: 'connected-accounts',
      label: 'Connected Accounts',
      icon: '🔗',
      route: '/connected-accounts',
    },
    {
      id: 'social-callback',
      label: 'OAuth Callback',
      icon: '🔄',
      route: '/social-callback',
    },
    {
      id: 'account-locked',
      label: 'Account Locked',
      icon: '🔒',
      route: '/account-locked',
    },
    {
      id: 'session-expired',
      label: 'Session Expired',
      icon: '⏱️',
      route: '/session-expired',
    },
    {
      id: 'recovery-codes',
      label: 'Recovery Codes',
      icon: '🔢',
      route: '/recovery-codes',
    },
    {
      id: 'security-questions',
      label: 'Security Questions',
      icon: '❓',
      route: '/security-questions',
    },
    {
      id: 'terms-acceptance',
      label: 'Terms of Service',
      icon: '📄',
      route: '/terms-acceptance',
    },
    {
      id: 'privacy-settings',
      label: 'Privacy Settings',
      icon: '🔒',
      route: '/privacy-settings',
    },
    {
      id: 'delete-account',
      label: 'Delete Account',
      icon: '🗑️',
      route: '/delete-account',
    },
    {
      id: 'update-email',
      label: 'Update Email',
      icon: '📬',
      route: '/update-email',
    },
  ];

  constructor(private router: Router) {}
}
