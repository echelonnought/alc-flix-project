import { Component, OnInit } from '@angular/core';
import { SharedServices } from '../shared.service';

@Component({
  styleUrls: ['./favorites.component.css'],
  templateUrl: './favorites.component.html'
})
export class FavoriteComponent implements OnInit {
    message: string;
   constructor(private sharedService: SharedServices) {}

   ngOnInit(): void {
    this.sharedService.currentMessage.subscribe(
      message => this.message = message
     );
   }

}
