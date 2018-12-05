import { ApiService } from '../../shared/api.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../Post.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  urlPosts = 'https://jsonplaceholder.typicode.com/posts';
  post$: Observable<Post>;
  postId = -1;

  constructor(private api: ApiService) {
    this.post$ = api.getData<Post>(this.urlPosts);
  }

  onMoreDetails(id: number) {
    this.postId = id;
  }
  ngOnInit() {}
}
