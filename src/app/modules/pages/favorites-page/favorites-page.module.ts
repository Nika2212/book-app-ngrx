import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesPageComponent } from './favorites-page.component';
import { FavoritesPageRoutingModule } from './favorites-page-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    FavoritesPageComponent
  ],
  imports: [
    CommonModule,
    FavoritesPageRoutingModule,
    SharedModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    FavoritesPageComponent
  ]
})
export class FavoritesPageModule { }
