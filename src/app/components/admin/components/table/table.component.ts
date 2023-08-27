import { posts } from './../../../data/posts';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PostsService } from './../../../../services/posts/posts.service';
import { IPost } from '../../../../services/posts/post.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  postsList: any[] = [];

  data: Object;
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loadAllPosts();
  }

  loadAllPosts() {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((res: any) => {
        this.postsList = res.data;
      });
  }
  openPost(id: number) {
    this.router.navigate(['/posts', id]);
  }
}
