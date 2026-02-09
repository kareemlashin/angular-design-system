import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-post',
  imports: [CommonModule],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditPostComponent {}
