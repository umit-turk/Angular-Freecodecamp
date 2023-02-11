import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email:string="";
  password:string="";
  constructor(private route: Router){}

  login(){
    if(this.email === "admin@gmail.com" && this.password === "admin"){
     this.route.navigate(['/rooms', 'add'])
    // this.route.navigateByUrl('rooms/add')
    //  window.open('/rooms/add','_blank')
    }
  }

}
