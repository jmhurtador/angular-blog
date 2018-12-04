import { ApiService } from '../../shared/api.service';
import { Comment } from './Comment.interface';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss'],
})
export class PostCommentComponent implements OnInit {
  urlComments = 'https://jsonplaceholder.typicode.com/comments';

  comments$: Observable<Comment>;

  @Input() postId;

  constructor(private api: ApiService) {
    this.comments$ = api.getData<Comment>(this.urlComments);
  }

  ngOnInit() {}
}
