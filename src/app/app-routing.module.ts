import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', loadChildren: () => import('./modules/pages/main-page/main-page.module').then(m => m.MainPageModule) },
  { path: 'favorites', loadChildren: () => import('./modules/pages/favorites-page/favorites-page.module').then(m => m.FavoritesPageModule) },
  { path: 'details/:id', loadChildren: () => import('./modules/pages/details-page/details-page.module').then(m => m.DetailsPageModule) },

  { path: '**', redirectTo: '/main' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
