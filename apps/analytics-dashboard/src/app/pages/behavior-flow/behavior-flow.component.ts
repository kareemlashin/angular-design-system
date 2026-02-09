import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContainerComponent, StackComponent } from '@design-system/components/layout';
import { HeadingComponent, TextComponent } from '@design-system/components/typography';
import { CardComponent, CardHeaderComponent, CardContentComponent } from '@design-system/components/card';
import { TableContainerComponent, TableColumn } from '@design-system/components/table';

@Component({
  selector: 'app-behavior-flow',
  imports: [
    ContainerComponent,
    StackComponent,
    HeadingComponent,
    TextComponent,
    CardComponent,
    CardHeaderComponent,
    CardContentComponent,
    TableContainerComponent,
  ],
  templateUrl: './behavior-flow.component.html',
  styleUrl: './behavior-flow.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BehaviorFlowComponent {
  entryPages = [
    { page: '/home', count: 45231 },
    { page: '/products', count: 23456 },
    { page: '/blog', count: 18765 },
  ];

  exitPages = [
    { page: '/checkout/complete', count: 12456 },
    { page: '/contact', count: 8934 },
    { page: '/pricing', count: 7654 },
  ];

  userPaths = [
    { entry: '/home', pagesVisited: 3.5, exit: '/pricing', count: 8934 },
    { entry: '/products', pagesVisited: 2.8, exit: '/checkout', count: 6745 },
    { entry: '/blog', pagesVisited: 4.2, exit: '/home', count: 5432 },
    { entry: '/pricing', pagesVisited: 2.1, exit: '/signup', count: 4321 },
  ];

  entryColumns: TableColumn[] = [
    { key: 'page', label: 'Entry Page' },
    { key: 'count', label: 'Count' },
  ];

  exitColumns: TableColumn[] = [
    { key: 'page', label: 'Exit Page' },
    { key: 'count', label: 'Count' },
  ];

  pathColumns: TableColumn[] = [
    { key: 'entry', label: 'Entry' },
    { key: 'pagesVisited', label: 'Pages Visited' },
    { key: 'exit', label: 'Exit' },
    { key: 'count', label: 'Count' },
  ];
}
