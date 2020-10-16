import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsPageComponent } from './details-page.component';
import { DetailsPageRoutingModule } from './details-page-routing.module';

@NgModule({
  declarations: [DetailsPageComponent],
  imports: [
    CommonModule,
    DetailsPageRoutingModule
  ],
  exports: [
    DetailsPageComponent
  ]
})
export class DetailsPageModule { }
