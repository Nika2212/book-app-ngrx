import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from '../main-page/main-page.component';
import { DetailsPageComponent } from './details-page.component';

const routes: Routes = [
  { path: '', component: DetailsPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DetailsPageRoutingModule {
}
