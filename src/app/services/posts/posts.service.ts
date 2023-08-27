import { IPost } from './post.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  getAll() {
    throw new Error('Method not implemented.');
  }
  // private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  // constructor(private http: HttpClient) {}
  // // API_URL = 'https://localhost:4200/posts';
  // // API_URL = 'https://jsonplaceholder.typicode.com/posts';
  // getUserBoard() {
  //   return this.http.get(this.postsUrl, { responseType: 'text' });
  // }
  // getAll() {
  //   return this.http.get<IPost[]>(this.API_URL);
  // }
}
