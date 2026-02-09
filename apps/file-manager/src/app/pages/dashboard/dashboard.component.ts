import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContainerComponent, StackComponent } from '@design-system/components/layout';
import { HeadingComponent, TextComponent } from '@design-system/components/typography';
import { CardComponent, CardHeaderComponent, CardContentComponent } from '@design-system/components/card';
import { TableContainerComponent, TableColumn } from '@design-system/components/table';

interface StatCard {
  label: string;
  value: string;
  icon: string;
}

interface FileRecord {
  name: string;
  type: string;
  size: string;
  modified: string;
  sharedWith: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
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
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  stats: StatCard[] = [
    { label: 'Total Files', value: '8,234', icon: '📁' },
    { label: 'Storage Used', value: '45.2 GB', icon: '💾' },
    { label: 'Shared Files', value: '234', icon: '👥' },
    { label: 'Recent Uploads', value: '56', icon: '⬆️' },
  ];

  recentFiles: FileRecord[] = [
    { name: 'Q4_Report.pdf', type: 'PDF', size: '2.4 MB', modified: '2024-02-08', sharedWith: 'John Doe' },
    { name: 'Project_Proposal.docx', type: 'Document', size: '856 KB', modified: '2024-02-08', sharedWith: 'Jane Smith' },
    { name: 'Budget_2024.xlsx', type: 'Spreadsheet', size: '1.2 MB', modified: '2024-02-07', sharedWith: 'Team' },
    { name: 'Design_Mockup.fig', type: 'Design', size: '5.8 MB', modified: '2024-02-07', sharedWith: 'Design Team' },
    { name: 'Meeting_Notes.txt', type: 'Text', size: '12 KB', modified: '2024-02-06', sharedWith: 'All' },
  ];

  columns: TableColumn[] = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'type', label: 'Type', sortable: true },
    { key: 'size', label: 'Size', sortable: true },
    { key: 'modified', label: 'Modified', sortable: true },
    { key: 'sharedWith', label: 'Shared With', sortable: false },
  ];
}
