import { Component, OnInit } from '@angular/core';
import { SignInServiceService } from '../Services/sign-in-service.service';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent implements OnInit {

  constructor(private service: SignInServiceService) { }

  public isLogged;

  public name = 'Arold DONANG';

  ngOnInit(): void {
    this.isLogged = this.service.isLogged;
    console.log(this.isLogged)
  }

}
