# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a comprehensive **Angular Design System** built with Angular 19+, using modern standalone components, Signals, and organized as an Nx monorepo. The design system provides reusable UI components, design tokens, and accessibility utilities for building scalable enterprise applications.

## Technology Stack

- **Angular 19+**: Modern standalone components, Signals-based reactivity
- **Nx Monorepo**: Build caching, affected commands, efficient dependency management
- **TypeScript 5.6+**: Strict mode enabled for type safety
- **SCSS**: Custom design tokens with CSS custom properties for theming
- **Storybook 8**: Interactive component documentation and testing
- **Jest**: Fast unit testing with Angular preset
- **Accessibility**: WCAG 2.1 AA compliant with dedicated utilities

## Repository Structure

```
new-claude/
├── apps/
│   └── design-system-showcase/        # Demo application
│       └── .storybook/                # Storybook configuration
├── libs/
│   └── design-system/
│       ├── tokens/                    # Design tokens (SCSS/CSS)
│       ├── core/                      # Core utilities & services
│       └── components/                # Component libraries (to be added)
│           ├── button/
│           ├── input/
│           ├── card/
│           └── ...
└── tools/                             # Build scripts & generators
```

## Key Commands

### Development
```bash
npm start                   # Start demo application
npm run storybook          # Start Storybook (component playground)
npm test                   # Run all tests
npm run lint               # Lint all projects
npm run format             # Format code with Prettier
```

### Building
```bash
npm run build              # Build all libraries
npm run storybook:build    # Build Storybook for deployment
npm run affected:build     # Build only affected projects
```

### Testing
```bash
npm test                   # Run all tests
npm run test:watch         # Run tests in watch mode
npm run test:coverage      # Generate coverage report
npm run affected:test      # Test only affected projects
```

### Nx Utilities
```bash
npm run graph              # Visualize project dependencies
nx reset                   # Clear Nx cache
nx show project <name>     # Show project details
```

## Architecture

### Design Tokens

Design tokens are defined in `libs/design-system/tokens/` using a three-tier system:

1. **Primitive tokens**: Raw values (e.g., `$primitive-blue-500: #3b82f6`)
2. **Semantic tokens**: Contextual meanings (e.g., `$color-primary: $primitive-blue-600`)
3. **Component tokens**: Component-specific values

**Token Categories:**
- Colors (`_colors.scss`)
- Typography (`_typography.scss`)
- Spacing (`_spacing.scss` - 8px grid)
- Shadows (`_shadows.scss`)
- Borders (`_borders.scss`)
- Animations (`_animations.scss`)
- Breakpoints (`_breakpoints.scss`)
- Z-index (`_z-index.scss`)
- Mixins (`_mixins.scss`)

**Usage:**
```scss
@import '@design-system/tokens';

.my-component {
  padding: $spacing-4;
  background: $color-primary;
  border-radius: $border-radius-md;
  transition: $transition-button;

  @include respond-to('md') {
    padding: $spacing-6;
  }
}
```

### Component Architecture

All components follow these patterns:

#### 1. Standalone Components with Signals

```typescript
import { Component, input, output, signal, computed } from '@angular/core';

@Component({
  selector: 'ds-button',
  standalone: true,
  template: `...`,
  styleUrls: ['./button.component.scss'],
  host: {
    '[attr.aria-disabled]': 'disabled()',
    '[attr.role]': '"button"',
    '[class]': 'computedClasses()',
  }
})
export class ButtonComponent {
  // Signal inputs (Angular 19+)
  variant = input<'primary' | 'secondary'>('primary');
  size = input<'sm' | 'md' | 'lg'>('md');
  disabled = input<boolean>(false);

  // Signal outputs
  clicked = output<MouseEvent>();

  // Computed values
  computedClasses = computed(() => {
    return `ds-button ds-button--${this.variant()} ds-button--${this.size()}`;
  });
}
```

#### 2. BEM Naming Convention

```scss
.ds-button {
  // Base styles

  &--primary { /* Primary variant */ }
  &--secondary { /* Secondary variant */ }
  &--sm { /* Small size */ }
  &--md { /* Medium size */ }
  &--lg { /* Large size */ }
  &--disabled { /* Disabled state */ }

  &__icon { /* Icon element */ }
  &__label { /* Label element */ }
}
```

#### 3. Accessibility First

Every component must include:
- Proper ARIA attributes (role, aria-label, aria-disabled, etc.)
- Keyboard navigation support (Tab, Enter, Space, Arrow keys)
- Focus management with visible focus indicators
- Screen reader announcements via LiveAnnouncerService
- WCAG 2.1 AA color contrast compliance

**Core Accessibility Utilities:**
```typescript
import {
  FocusManagerService,
  UniqueIdService,
  LiveAnnouncerService,
  AutoFocusDirective,
  TrapFocusDirective,
  ClickOutsideDirective,
} from '@design-system/core';
```

### Storybook Integration

Every component should have a `.stories.ts` file:

```typescript
import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};
```

**Accessibility Testing:**
- Storybook includes the `@storybook/addon-a11y` addon
- All stories are automatically tested for accessibility violations
- Check the "Accessibility" tab in Storybook for issues

## Development Workflow

### Creating a New Component

1. **Generate component library:**
```bash
npx nx g @nx/angular:library --name=my-component --directory=libs/design-system/components/my-component --standalone=true
```

2. **Create component with stories:**
```bash
cd libs/design-system/components/my-component/src/lib
# Create: my-component.component.ts, .scss, .spec.ts, .stories.ts
```

3. **Use design tokens:**
```scss
@import '@design-system/tokens';

.ds-my-component {
  padding: $spacing-4;
  background: $color-surface;
}
```

4. **Add accessibility:**
```typescript
import { UniqueIdService } from '@design-system/core';

export class MyComponent {
  private uniqueId = inject(UniqueIdService);
  id = input<string>(this.uniqueId.generate('my-component'));
}
```

5. **Write tests:**
```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

### Testing Guidelines

- **Unit tests**: Test component logic, inputs, outputs, computed values
- **Accessibility tests**: Use Storybook's a11y addon for automated checks
- **Keyboard navigation**: Test Tab, Enter, Space, Arrow keys
- **Focus management**: Verify focus indicators and focus trapping
- **Screen reader**: Ensure proper ARIA labels and announcements

### Code Style

- **Component selectors**: Use `ds-` prefix (e.g., `ds-button`)
- **Directive selectors**: Use `ds` prefix (e.g., `dsAutoFocus`)
- **Service names**: Use `Service` suffix (e.g., `UniqueIdService`)
- **File names**: Use kebab-case (e.g., `button.component.ts`)
- **Class names**: Use PascalCase (e.g., `ButtonComponent`)
- **Signal inputs/outputs**: Use camelCase (e.g., `disabled`, `clicked`)
- **SCSS variables**: Use kebab-case (e.g., `$color-primary`)
- **CSS classes**: Use BEM (e.g., `.ds-button--primary`)

### Common Patterns

#### Signal-based Form Control

```typescript
import { Component, input, output, signal } from '@angular/core';

export class InputComponent {
  value = input<string>('');
  valueChange = output<string>();
  disabled = input<boolean>(false);

  handleInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.valueChange.emit(value);
  }
}
```

#### Computed Classes

```typescript
computedClasses = computed(() => {
  const classes = ['ds-button', `ds-button--${this.variant()}`];
  if (this.disabled()) classes.push('ds-button--disabled');
  if (this.loading()) classes.push('ds-button--loading');
  return classes.join(' ');
});
```

#### Responsive Design

```scss
@import '@design-system/tokens';

.ds-card {
  padding: $spacing-4;

  @include respond-to('md') {
    padding: $spacing-6;
  }

  @include respond-to('lg') {
    padding: $spacing-8;
  }
}
```

## Nx Best Practices

- **Affected commands**: Use `nx affected` to only build/test changed projects
- **Build caching**: Nx caches build outputs for faster rebuilds
- **Dependency graph**: Use `npm run graph` to visualize dependencies
- **Generators**: Use Nx generators for consistent project structure
- **Project boundaries**: Keep dependencies unidirectional (tokens → core → components)

## Troubleshooting

### Common Issues

**ESLint errors**: Run `npm run lint` and fix issues
**TypeScript errors**: Check `tsconfig.base.json` path mappings
**Build failures**: Clear Nx cache with `nx reset`
**Storybook not loading**: Check `.storybook/main.ts` story paths
**Token imports failing**: Verify SCSS import path is correct

### Helpful Commands

```bash
nx reset                          # Clear Nx cache
npm run format                    # Auto-format all files
npm run lint                      # Check for lint errors
nx show project <name>            # Show project configuration
nx run-many --target=build --all # Build all projects
```

## Resources

- [Angular Documentation](https://angular.dev)
- [Nx Documentation](https://nx.dev)
- [Storybook Documentation](https://storybook.js.org)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [BEM Methodology](http://getbem.com/)
- [Design Tokens W3C](https://www.w3.org/community/design-tokens/)

## Next Steps

1. **Build core components**: Button, Input, Card, Modal, etc.
2. **Add theming support**: Light/dark theme switching
3. **Create complex components**: Table, Navigation, Tabs, etc.
4. **Write comprehensive documentation**: MDX files in Storybook
5. **Set up CI/CD**: Automated testing and deployment
6. **Publish to npm**: Package design system for distribution
