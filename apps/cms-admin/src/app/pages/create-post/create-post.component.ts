import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-post',
  imports: [CommonModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatePostComponent {}
