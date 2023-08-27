
import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {Post} from "./post";
import {ActivatedRoute} from "@angular/router";
import {AdminService} from "../../services/admin.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
post!: Observable<Post>;
id!: number;
constructor(private activateRouter: ActivatedRoute, private adminServices: AdminService) {
}
ngOnInit() {
  this.activateRouter.params.subscribe((params) => this.id = params?.['id'])
this.post = this.adminServices.getPost(this.id)
}
}
