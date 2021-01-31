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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoingOnCoursesComponent } from './going-on-courses/going-on-courses.component';
import { FinishedCoursesComponent } from './finished-courses/finished-courses.component';
import {MaterialModule} from './material/material.module';
import { FooterComponent } from './footer/footer.component';
import { FourOFourComponent } from './four-o-four/four-o-four.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    SigninComponent,
    SignupComponent,
    KnowledgeFromComponent,
    AppBarComponent,
    EtudiantComponent,
    GoingOnCoursesComponent,
    FinishedCoursesComponent,
    FooterComponent,
    FourOFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    SignInServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
