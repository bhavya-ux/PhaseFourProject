import { Component, OnInit } from '@angular/core';
import { FlightserviceService } from '../flightservice.service';

@Component({
  selector: 'app-flightlist',
  templateUrl: './flightlist.component.html',
  styleUrls: ['./flightlist.component.css']
})
export class FlightlistComponent implements OnInit {
  
  flight;
  constructor(
    private flightService : FlightserviceService
  ) { }

  ngOnInit() {
    this.flightService.getallflights()
    .subscribe(response=>{
      this.flight = response;
      console.log('response is=',response)
    },
    error=>{
      console.log('error is=',error)
    })
  }
 
}
