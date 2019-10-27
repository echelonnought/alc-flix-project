import { Component, OnInit, Input } from '@angular/core';
import { MoviesdbService } from '../services/movies.service';
import { IMovie } from './movies';
import { NotificationService } from '../toaster/notification.service';
import { SharedServices } from '../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  _listFilter: string;
  errorMessage: void;
  message: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredMovies = this.listFilter ? this.performFilter(this.listFilter) : this.movies;
  }
  filteredMovies: IMovie[];
  movies: IMovie[] = [] ;
  constructor(private moviesdbService: MoviesdbService,
              private notifyMessage: NotificationService,
               private sharedService: SharedServices) {

  }

  performFilter(filterBy: string): IMovie[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.movies.filter((movie: IMovie) =>
      movie.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    this.moviesdbService.getMovies()
    .subscribe({
      next: movies => {
        this.movies = movies;
        this.filteredMovies = this.movies;
      },
      error: err => this.errorMessage

    });

    this.sharedService.currentMessage.subscribe(
     message => this.message = message
    );
 }
  showToastr() {
    this.notifyMessage.showMessage('You made this your favorite', 'Notification message');
  }
 showHtmlToastr() {
   this.notifyMessage.showHTMLMessage('<h6>You made this your favorite movie</h6>', 'Notification');
 }

newMessage() {
  this.sharedService.changeMessage('hello from sibling');
}

}
