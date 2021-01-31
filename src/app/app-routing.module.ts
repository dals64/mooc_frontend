import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { FourOFourComponent } from './four-o-four/four-o-four.component';
import { KnowledgeFromComponent } from './knowledge-from/knowledge-from.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'', redirectTo:'accueil', pathMatch:'full'},
  {path:'accueil', component:AppBarComponent, children:[
    { path: '', component: AccueilComponent, outlet: 'principal' },
    { path: 'signIn', component: SigninComponent, outlet: 'principal' },
    { path: 'register', component: SignupComponent, outlet: 'principal' },
    { path: 'connaissances', component: KnowledgeFromComponent, outlet: 'principal' },
    { path: 'home', component: EtudiantComponent, outlet: 'principal'},
  ]},
  
  {path:'**', component:FourOFourComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
