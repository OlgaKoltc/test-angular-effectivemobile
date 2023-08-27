import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { TableComponent } from './components/table/table.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import {PostComponent} from "./components/post/post.component";

@NgModule({
  declarations: [
    HeaderComponent,
    TableComponent,
    AdminDashboardComponent,
    PostComponent
  ],
  imports: [CommonModule, AdminRoutingModule, HttpClientModule],
})
export class AdminModule {}
