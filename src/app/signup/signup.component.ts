import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public isOk = true;

  public error = null;

  public

  public formData = {
    email: null,
    password: null,
    firstname: null,
    lastname: null,
    age: null,
    sexe: null,
    confirm: null
  }

  submit() {
    if (this.validation()) {
      console.log('ik')
    }

  }

  validateMail(mail) {
    let bool1 = false
    let bool2 = false
    let el1 = ['.']
    let el2 = ['.']
    for (let index = 0; index < mail.length; index++) {
      if (el1.includes(mail[index])) {
        bool1 = true
      }
    }
    for (let index = 0; index < mail.length; index++) {
      if (el2.includes(mail[index])) {
        bool2 = true
      }
    }

    return (bool1 && bool2)
  }

  validation() {
    this.isOk = true;
    if (this.validateMail(this.formData.email) === false) {
      this.error = 'Entrer une adresse mail valide'
      this.isOk = false
      return !this.isOk
    } else if ((this.formData.password === null) || (this.formData.password === '')) {
      this.error = "Entrer votre mot de passe"
      this.isOk = false
      return !this.isOk
    } else {
      return this.isOk
    }
  }

}
