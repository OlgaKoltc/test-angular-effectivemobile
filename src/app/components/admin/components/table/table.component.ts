import { Component, OnInit } from '@angular/core';
import {Post} from "../post/post";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {AdminService} from "../../services/admin.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})

export class TableComponent implements OnInit {
  postList!:Observable<Post[]>;
  constructor(private adminService: AdminService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.postList = this.adminService.getPostList()
  }
}
