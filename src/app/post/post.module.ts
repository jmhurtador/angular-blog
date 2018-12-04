import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostCommentComponent } from './post-comment/post-comment.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import {
  MatListModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatProgressBarModule,
  MatExpansionModule,
} from '@angular/material';

@NgModule({
  declarations: [
    PostComponent,
    PostListComponent,
    PostCommentComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatExpansionModule
  ],
  exports: [PostComponent, PostListComponent, PostCommentComponent],
})
export class PostModule {}
