import { Component, OnInit } from '@angular/core';
import { FlightserviceService } from '../flightservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-removeflight',
  templateUrl: './removeflight.component.html',
  styleUrls: ['./removeflight.component.css']
})
export class RemoveflightComponent implements OnInit {

  id;
  flight;
  constructor(
   private flightService : FlightserviceService,
   private router: Router
  ) { }

  ngOnInit() {
  }
  removeflight()
  {
    this.flightService.removeflight(this.id)
  .subscribe(response=>{
    this.flight = response;
    console.log('response is=',this.flight)
    this.router.navigate(['/flightlist'])
  },
  error=>{
    console.log('error is=',error)
  })
  }
}
