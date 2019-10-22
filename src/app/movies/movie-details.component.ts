import { Component, OnInit } from '@angular/core';
import { MoviesdbService } from '../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IMovie } from './movies';

@Component({
    styleUrls: ['./movie-details.component.css'],
    templateUrl: './movie-details.component.html'
})

export class MovieDetailsComponent implements OnInit {
  movie: IMovie | undefined;
  errorMessage = '';

  constructor(private moviesDbService: MoviesdbService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    const movieId = this.route.snapshot.paramMap.get('id');

    if (movieId) {
       const id = +movieId;
       this.getMovie(id);
     }
    }

     getMovie(id: number) {
       this.moviesDbService.getMovie(id).subscribe(
         movie => this.movie = movie,
         error => this.errorMessage = error as any);
     }


    onBack(): void {
      this.router.navigate(['/movies']);
    }
}
