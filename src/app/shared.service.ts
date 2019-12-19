import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedServices {
   private movieUrl = 'api/movies/movies.json';
   private messageSource = new BehaviorSubject<string>('default message');
   currentMessage = this.messageSource.asObservable();

   changeMessage(movie: any) {
     this.messageSource.next(movie);
   }
}
