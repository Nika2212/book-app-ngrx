import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsPageComponent } from './details-page.component';
import { DetailsPageRoutingModule } from './details-page-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [DetailsPageComponent],
  imports: [
    CommonModule,
    DetailsPageRoutingModule,
    MatButtonModule,
    MatIconModule,
    SharedModule

  ],
  exports: [
    DetailsPageComponent
  ]
})
export class DetailsPageModule {
}
