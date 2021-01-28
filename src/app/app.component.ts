import { Component } from '@angular/core';
import { SignInServiceService } from './Services/sign-in-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private service: SignInServiceService){}

  public isLogged = false;

  ngOnInit(){
    this.isLogged = this.service.isLogged;
  }

}
