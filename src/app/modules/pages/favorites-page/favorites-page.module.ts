import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesPageComponent } from './favorites-page.component';
import { FavoritesPageRoutingModule } from './favorites-page-routing.module';

@NgModule({
  declarations: [FavoritesPageComponent],
  imports: [
    CommonModule,
    FavoritesPageRoutingModule
  ],
  exports: [
    FavoritesPageComponent
  ]
})
export class FavoritesPageModule { }
