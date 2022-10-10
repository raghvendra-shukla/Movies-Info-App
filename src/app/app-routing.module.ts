import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesitemsComponent } from './My-Components/moviesitems/moviesitems.component';
import { TrendingComponent } from './My-Components/trending/trending.component';
import { TVshowsComponent } from './My-Components/tvshows/tvshows.component';

const routes: Routes = [
  {
    component:MoviesitemsComponent,
    path:""
  },
  {
    component:TrendingComponent,
    path:"trending"
  },
  {
    component:TVshowsComponent,
    path:"tvshows"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
