# Angular Design System - Enterprise-Grade UI Component Library

A comprehensive, production-ready Angular design system with **10 complete applications** and **200+ pages**, built with Angular 19+, Signals, and modern best practices.

## 🎯 What's Included

### Design System Foundation
- ✅ **Complete Design Token System** (colors, typography, spacing, shadows, etc.)
- ✅ **10+ UI Components** (Button, Input, Table, Sidenav, Modal, etc.)
- ✅ **Smart/Dumb Component Pattern** for maintainability
- ✅ **Light/Dark Theme Support** with auto system detection
- ✅ **WCAG 2.1 AA Accessibility Compliance**
- ✅ **Storybook 8** with interactive documentation
- ✅ **Nx Monorepo** for scalability

### 10 Production-Ready Applications (200 Pages Total)

1. **Admin Dashboard** (20 pages) - Complete admin control panel
2. **Authentication App** (20 pages) - Full auth flow with login, register, 2FA
3. **E-commerce Dashboard** (20 pages) - Product, orders, inventory management
4. **Analytics Dashboard** (20 pages) - Data visualization and reporting
5. **Blog/CMS Admin** (20 pages) - Content management system
6. **Project Management** (20 pages) - Task tracking, kanban boards
7. **User Management** (20 pages) - CRUD operations, roles, permissions
8. **Settings/Profile App** (20 pages) - User preferences, account settings
9. **Notification Center** (20 pages) - Notification management
10. **File Manager** (20 pages) - Document management system

## 🚀 Quick Start

### Prerequisites
```bash
Node.js >= 18.x
npm >= 9.x
```

### Installation
```bash
# Clone repository
git clone https://github.com/kareemlashin/angular-design-system.git
cd angular-design-system

# Install dependencies
npm install
```

### Development

```bash
# Start Storybook (view all components)
npm run storybook

# Serve demo app
npm start

# Generate all 10 apps with 200 pages
./tools/scripts/generate-apps.sh

# Run specific app
npx nx serve admin-dashboard
npx nx serve auth-app
npx nx serve ecommerce-dashboard
# ... etc
```

### Build

```bash
# Build all projects
npm run build

# Build specific app
npx nx build admin-dashboard

# Build Storybook for deployment
npm run storybook:build
```

### Testing

```bash
# Run all tests
npm test

# Test specific project
npx nx test button

# Generate coverage
npm run test:coverage
```

## 📁 Project Structure

```
new-claude/
├── apps/                              # 10 Applications (200 pages total)
│   ├── admin-dashboard/               # Admin control panel
│   ├── auth-app/                      # Authentication flows
│   ├── ecommerce-dashboard/           # E-commerce management
│   ├── analytics-dashboard/           # Analytics & reporting
│   ├── cms-admin/                     # Content management
│   ├── project-manager/               # Project tracking
│   ├── user-management/               # User CRUD operations
│   ├── settings-app/                  # Settings & preferences
│   ├── notification-center/           # Notifications
│   └── file-manager/                  # File management
│
├── libs/design-system/                # Design System Libraries
│   ├── tokens/                        # Design tokens
│   │   └── scss/                      # SCSS token files
│   ├── core/                          # Core utilities
│   │   ├── services/                  # Accessibility services
│   │   ├── directives/                # Utility directives
│   │   ├── types/                     # TypeScript types
│   │   └── utilities/                 # Helper functions
│   └── components/                    # UI Components
│       ├── button/                    # Button component
│       ├── input/                     # Input components
│       ├── table/                     # Table components
│       └── ...                        # More components
│
├── tools/                             # Build tools & generators
│   ├── generators/                    # Custom Nx generators
│   └── scripts/                       # Build scripts
│
├── CLAUDE.md                          # Development guide
├── COMPONENTS_GUIDE.md                # Component implementation guide
└── APPS_ARCHITECTURE.md               # Apps architecture document
```

## 🎨 Design System

### Design Tokens

Three-tier token system for maintainability:

```scss
// 1. Primitive tokens (raw values)
$primitive-blue-500: #3b82f6;

// 2. Semantic tokens (contextual meaning)
$color-primary: $primitive-blue-600;

// 3. Component tokens (component-specific)
$button-padding: $spacing-4;
```

**Token Categories:**
- Colors (50-900 shades, semantic colors)
- Typography (modular scale, font families)
- Spacing (8px-based grid)
- Shadows (elevation system)
- Borders, Animations, Breakpoints, Z-index

### Components

**Form Components:**
- Button (5 variants, 3 sizes, loading states)
- Input, Textarea (with validation)
- Select, Checkbox, Radio

**Layout Components:**
- Container, Grid, Stack
- Sidenav (with smart container)
- Card (composable)

**Data Display:**
- Table (with sorting, pagination, filtering)
- Typography (Heading, Text)

**Overlays:**
- Modal/Dialog (with service)
- Toast/Alert (with service)

### Theming

```typescript
import { ThemeService } from '@design-system/core';

// In your component
themeService = inject(ThemeService);

// Switch themes
this.themeService.setTheme('dark');  // or 'light', 'auto'
this.themeService.toggleTheme();

// Get current theme
console.log(this.themeService.currentTheme());
```

## 🏗️ Architecture

### Component Pattern: Smart/Dumb

**Dumb (Presentational) Components:**
- Pure presentation logic
- Receive data via `input()` signals
- Emit events via `output()` signals
- No service injection

```typescript
@Component({
  selector: 'ds-button',
  standalone: true,
  template: `<button>{{label()}}</button>`
})
export class ButtonComponent {
  label = input<string>('Click me');
  clicked = output<MouseEvent>();
}
```

**Smart (Container) Components:**
- Business logic
- Data fetching
- State management
- Service injection

```typescript
@Component({
  selector: 'ds-table-container',
  standalone: true,
  template: `<ds-table [data]="sortedData()" />`
})
export class TableContainerComponent {
  private dataService = inject(DataService);
  sortedData = signal<any[]>([]);
}
```

### Nx Monorepo Benefits

- **Build Caching**: Fast incremental builds
- **Affected Commands**: Test/build only changed projects
- **Dependency Graph**: Visualize relationships
- **Code Generators**: Consistent project structure

```bash
# Only build affected projects
npm run affected:build

# Visualize dependency graph
npm run graph

# Run tests for affected projects
npm run affected:test
```

## 📖 Documentation

- **[CLAUDE.md](./CLAUDE.md)** - Complete development guide
- **[COMPONENTS_GUIDE.md](./COMPONENTS_GUIDE.md)** - Component implementation patterns
- **[APPS_ARCHITECTURE.md](./APPS_ARCHITECTURE.md)** - Application architecture (200 pages)
- **Storybook** - Interactive component documentation

## 🧪 Testing

### Unit Testing (Jest)

```typescript
describe('ButtonComponent', () => {
  it('should emit clicked event', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const spy = jest.fn();

    fixture.componentInstance.clicked.subscribe(spy);
    fixture.nativeElement.click();

    expect(spy).toHaveBeenCalled();
  });
});
```

### Accessibility Testing

```typescript
import { expectAccessible } from '@design-system/testing';

it('should be accessible', async () => {
  await expectAccessible(fixture);
});
```

### Visual Testing (Storybook)

- Automated accessibility checks via `@storybook/addon-a11y`
- Visual regression testing with Chromatic (optional)
- Interactive testing with `@storybook/addon-interactions`

## 🎯 Key Features

### Modern Angular 19+
- ✅ Standalone components (no NgModules)
- ✅ Signal-based reactivity
- ✅ `input()` / `output()` API
- ✅ `computed()` for derived state
- ✅ Control flow syntax (`@if`, `@for`)

### Accessibility
- ✅ WCAG 2.1 AA compliant
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ Focus management
- ✅ ARIA attributes

### Performance
- ✅ Signal-based change detection
- ✅ OnPush strategy by default
- ✅ Lazy loading with Nx
- ✅ Tree-shakeable components
- ✅ Optimized bundle sizes

### Developer Experience
- ✅ TypeScript strict mode
- ✅ ESLint + Prettier configured
- ✅ Comprehensive documentation
- ✅ Storybook playground
- ✅ Hot module replacement

## 🛠️ Commands Reference

### Development
```bash
npm start                  # Start demo app
npm run storybook         # Start Storybook
npm test                  # Run tests
npm run lint              # Lint code
npm run format            # Format code
```

### Building
```bash
npm run build             # Build all
npm run affected:build    # Build affected only
npm run storybook:build   # Build Storybook
```

### Testing
```bash
npm test                  # All tests
npm run test:watch        # Watch mode
npm run test:coverage     # Coverage report
npm run affected:test     # Test affected only
```

### Nx Utilities
```bash
npm run graph             # Dependency graph
nx reset                  # Clear cache
nx show project <name>    # Project details
nx list                   # List plugins
```

## 📦 Technology Stack

- **Angular** 19.0.5
- **Nx** 20.3.0
- **TypeScript** 5.6
- **SCSS** + CSS Custom Properties
- **Storybook** 8.5
- **Jest** 29.7
- **ESLint** + **Prettier**

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

## 🔗 Links

- **GitHub**: https://github.com/kareemlashin/angular-design-system
- **Storybook**: [Deploy Storybook to see components]
- **Documentation**: See [CLAUDE.md](./CLAUDE.md)

## 🎓 Learning Resources

- [Angular Documentation](https://angular.dev)
- [Nx Documentation](https://nx.dev)
- [Storybook Documentation](https://storybook.js.org)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 💡 Usage Examples

### Using Components

```typescript
import { ButtonComponent } from '@design-system/components/button';

@Component({
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <ds-button
      variant="primary"
      size="md"
      [loading]="isLoading"
      (clicked)="handleClick()"
    >
      Save Changes
    </ds-button>
  `
})
export class MyComponent {
  isLoading = signal(false);

  handleClick() {
    this.isLoading.set(true);
    // Your logic here
  }
}
```

### Using Design Tokens

```scss
@import '@design-system/tokens';

.my-component {
  padding: $spacing-4;
  background-color: $color-primary;
  border-radius: $border-radius-md;
  transition: $transition-button;

  @include respond-to('md') {
    padding: $spacing-6;
  }

  &:hover {
    background-color: $color-primary-hover;
  }
}
```

---

**Built with ❤️ using Angular 19+ and modern web standards**
