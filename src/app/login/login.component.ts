import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email:string="";
  password:string="";
  constructor(){}

  login(){
    if(this.email === "admin@gmail.com" && this.password === "admin"){
      alert("Login successfuly")
    }
  }

}
