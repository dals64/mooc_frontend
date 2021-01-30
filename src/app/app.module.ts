import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {SignInServiceService} from './Services/sign-in-service.service';
import { AccueilComponent } from './accueil/accueil.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { KnowledgeFromComponent } from './knowledge-from/knowledge-from.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { EtudiantComponent } from './etudiant/etudiant.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    SigninComponent,
    SignupComponent,
    KnowledgeFromComponent,
    AppBarComponent,
    EtudiantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    SignInServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
