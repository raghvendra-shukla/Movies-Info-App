import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesSearchComponent } from './My-Components/movies-search/movies-search.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './My-Components/movies/movies.component';
import { FormsModule } from '@angular/forms';
import { MoviesitemsComponent } from './My-Components/moviesitems/moviesitems.component';
import { TrendingComponent } from './My-Components/trending/trending.component';
import { TVshowsComponent } from './My-Components/tvshows/tvshows.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesSearchComponent,
    MoviesComponent,
    MoviesitemsComponent,
    TrendingComponent,
    TVshowsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
