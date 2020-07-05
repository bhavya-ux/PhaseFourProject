import { Component } from '@angular/core';
import { FlightserviceService } from './flightservice.service';
import { Router } from '@angular/router';
import { BindingFlags } from '@angular/compiler/src/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username;
  password;
  message;
  registerflag = false;
  loginflag = true;
  details =
    {
      loginId : null,
      userName : "",
      userPassword : ""

    }
  constructor(private loginService : FlightserviceService,
    private router: Router,
    private registerservice : FlightserviceService,){}
  title = 'Flyaway-angular-app';
  login()
  {
  
    this.loginService.login(this.username,this.password)
    .subscribe(response=>{
      this.message = response[0];
      if (this.message == "Login failed")
      {
        this.loginflag = false;
        this.registerflag = true;

      }
      if (this.message == "Login successful")
      {
        this.loginflag = false;
        this.registerflag = false;

      }
      console.log('response is=',response)
    },
    error=>{
      console.log('error is=',error)
    })
  }
  register()
  {

    this.registerservice.register(this.details).subscribe(response =>{
      console.log(response)
      this.registerflag= false;
      this.loginflag=true;
      
    },
    error=>{
      console.log(error);
    })
  }
}
