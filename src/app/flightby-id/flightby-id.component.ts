import { Component, OnInit } from '@angular/core';
import { FlightserviceService } from '../flightservice.service';
import { Flight } from '../flight';

@Component({
  selector: 'app-flightby-id',
  templateUrl: './flightby-id.component.html',
  styleUrls: ['./flightby-id.component.css']
})
export class FlightbyIdComponent implements OnInit {
 id;
 flight;
  constructor(
  private flightService : FlightserviceService

  ) { }

  ngOnInit() {
  }
 flightbyID()
 {
  this.flightService.flightbyID(this.id)
  .subscribe(response=>{
    this.flight = response;
    console.log('response is=',this.flight)
  },
  error=>{
    console.log('error is=',error)
  })
 }
}

  
