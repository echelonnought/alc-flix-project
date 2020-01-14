import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IMovie } from '../movies/movies';
import { Observable, } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesdbService {

  private moviesUrl = 'https://guides.peruzal.com/xamarin-forms-guide/files/movies.json';
  private apiUrl = 'api/movies/movies.json';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<unknown> {
    console.log('I am seeing all movies');
    return this.http.get<IMovie[]>(this.apiUrl);
    // .pipe(
    //   tap(data => console.log('All: ' + JSON.stringify(data))),
    //   catchError(this.handleError)
    // );
  }
  getMovie(id: number): Observable<IMovie | undefined> {
    return this.getMovies().pipe(
      map((movies: IMovie[]) => movies.find(m => m.objectId === id))
    );

  }


  handleError(err: HttpErrorResponse): any {

    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;  }
    }

}


