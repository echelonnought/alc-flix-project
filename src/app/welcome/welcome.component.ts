import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {
  public pageTitle = 'Welcome';

  constructor() {

  }

  ngOnInit() {
    document.body.classList.add('background');
}
getUrl()
{
  return "url('http://estringsoftware.com/wp-content/uploads/2017/07/estring-header-lowsat.jpg')";
}
}
