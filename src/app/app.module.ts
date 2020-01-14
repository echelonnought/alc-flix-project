import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {NgxPaginationModule} from 'ngx-pagination';

import { WelcomeComponent } from './welcome/welcome.component';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './movies/home.component';
import { MovieDetailsComponent } from './movies/movie-details.component';
import { MovieImagePipe } from './pipes/movie-image.pipe';
import { FavoriteComponent } from './favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    WelcomeComponent,
    HomeComponent,
    MovieDetailsComponent,
    MovieImagePipe,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'movies', component: HomeComponent },
      { path: 'favorites', component: FavoriteComponent},
      { path: 'movies/:id', component: MovieDetailsComponent }
     
    ]),
    BrowserAnimationsModule,
    NgxPaginationModule,
    MDBBootstrapModule.forRoot(),
    ToastrModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
