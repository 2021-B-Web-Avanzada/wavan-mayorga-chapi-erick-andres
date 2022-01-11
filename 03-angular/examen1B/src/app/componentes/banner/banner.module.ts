import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargeBoxComponent } from './large-box/large-box.component';
import { ShortBoxComponent } from './short-box/short-box.component';



@NgModule({
  declarations: [
    LargeBoxComponent,
    ShortBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LargeBoxComponent,
    ShortBoxComponent
  ]
})
export class BannerModule { }
