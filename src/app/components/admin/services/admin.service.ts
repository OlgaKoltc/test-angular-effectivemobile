import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../components/post/post';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) {
  }

  getPostList() {
    return this.http
        .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }
    getPost(id: number) {
      return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)
    }
}