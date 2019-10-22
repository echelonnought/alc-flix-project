import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieImage'
})
export class MovieImagePipe implements PipeTransform {

  transform(movie: any): any {
    const url = 'http://image.tmdb.org/t/p/w40D';

    if   (movie.poster_path) {
      return url + movie.poster_path;
    } else {
      if (movie.backdrop_path) {
        return url + movie.backdrop_path;
      } else {
        return 'assets/home.png';
      }
    }
  }

}
