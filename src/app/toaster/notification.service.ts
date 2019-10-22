import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class NotificationService {
   constructor( private toastr: ToastrService) {

   }

   showMessage(message, title) {
     this.toastr.success(message, title);
   }

   showHTMLMessage(message, title) {
     this.toastr.success(message, title, {
       enableHtml: true
     });
   }
}
