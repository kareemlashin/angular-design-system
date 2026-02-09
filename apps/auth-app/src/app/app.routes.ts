import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/layout.component').then((m) => m.LayoutComponent),
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/login/login.component').then((m) => m.LoginComponent),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./pages/register/register.component').then(
            (m) => m.RegisterComponent
          ),
      },
      {
        path: 'forgot-password',
        loadComponent: () =>
          import('./pages/forgot-password/forgot-password.component').then(
            (m) => m.ForgotPasswordComponent
          ),
      },
      {
        path: 'reset-password',
        loadComponent: () =>
          import('./pages/reset-password/reset-password.component').then(
            (m) => m.ResetPasswordComponent
          ),
      },
      {
        path: 'email-verification',
        loadComponent: () =>
          import('./pages/email-verification/email-verification.component').then(
            (m) => m.EmailVerificationComponent
          ),
      },
      {
        path: 'two-factor-setup',
        loadComponent: () =>
          import('./pages/two-factor-setup/two-factor-setup.component').then(
            (m) => m.TwoFactorSetupComponent
          ),
      },
      {
        path: 'two-factor-verify',
        loadComponent: () =>
          import('./pages/two-factor-verify/two-factor-verify.component').then(
            (m) => m.TwoFactorVerifyComponent
          ),
      },
      {
        path: 'change-password',
        loadComponent: () =>
          import('./pages/change-password/change-password.component').then(
            (m) => m.ChangePasswordComponent
          ),
      },
      {
        path: 'active-sessions',
        loadComponent: () =>
          import('./pages/active-sessions/active-sessions.component').then(
            (m) => m.ActiveSessionsComponent
          ),
      },
      {
        path: 'login-history',
        loadComponent: () =>
          import('./pages/login-history/login-history.component').then(
            (m) => m.LoginHistoryComponent
          ),
      },
      {
        path: 'connected-accounts',
        loadComponent: () =>
          import('./pages/connected-accounts/connected-accounts.component').then(
            (m) => m.ConnectedAccountsComponent
          ),
      },
      {
        path: 'social-callback',
        loadComponent: () =>
          import('./pages/social-callback/social-callback.component').then(
            (m) => m.SocialCallbackComponent
          ),
      },
      {
        path: 'account-locked',
        loadComponent: () =>
          import('./pages/account-locked/account-locked.component').then(
            (m) => m.AccountLockedComponent
          ),
      },
      {
        path: 'session-expired',
        loadComponent: () =>
          import('./pages/session-expired/session-expired.component').then(
            (m) => m.SessionExpiredComponent
          ),
      },
      {
        path: 'recovery-codes',
        loadComponent: () =>
          import('./pages/recovery-codes/recovery-codes.component').then(
            (m) => m.RecoveryCodesComponent
          ),
      },
      {
        path: 'security-questions',
        loadComponent: () =>
          import('./pages/security-questions/security-questions.component').then(
            (m) => m.SecurityQuestionsComponent
          ),
      },
      {
        path: 'terms-acceptance',
        loadComponent: () =>
          import('./pages/terms-acceptance/terms-acceptance.component').then(
            (m) => m.TermsAcceptanceComponent
          ),
      },
      {
        path: 'privacy-settings',
        loadComponent: () =>
          import('./pages/privacy-settings/privacy-settings.component').then(
            (m) => m.PrivacySettingsComponent
          ),
      },
      {
        path: 'delete-account',
        loadComponent: () =>
          import('./pages/delete-account/delete-account.component').then(
            (m) => m.DeleteAccountComponent
          ),
      },
      {
        path: 'update-email',
        loadComponent: () =>
          import('./pages/update-email/update-email.component').then(
            (m) => m.UpdateEmailComponent
          ),
      },
    ],
  },
];
