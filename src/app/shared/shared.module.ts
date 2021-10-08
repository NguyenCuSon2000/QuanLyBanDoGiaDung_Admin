import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './components/topbar/topbar.component';
import { LeftSlidebarComponent } from './components/left-slidebar/left-slidebar.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TopbarComponent, LeftSlidebarComponent],
  exports: [
    TopbarComponent, LeftSlidebarComponent
  ]
})
export class SharedModule { }