import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostCommentComponent } from './post-comment/post-comment.component';
import { PostComponent } from './post.component';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  declarations: [
    PostComponent,
    PostListComponent,
    PostCommentComponent,
  ],
  imports: [CommonModule],
  exports: [PostComponent, PostListComponent, PostCommentComponent],
})
export class PostModule {}
