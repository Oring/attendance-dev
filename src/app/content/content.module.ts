import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KoreaAllComponent } from './korea-all/korea-all.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DashboardComponent,
    KoreaAllComponent
  ],
  declarations: [DashboardComponent, KoreaAllComponent]
})
export class ContentModule { }
