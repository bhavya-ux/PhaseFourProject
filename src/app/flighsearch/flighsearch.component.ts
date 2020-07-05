import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightserviceService } from '../flightservice.service';

@Component({
  selector: 'app-flighsearch',
  templateUrl: './flighsearch.component.html',
  styleUrls: ['./flighsearch.component.css']
})
export class FlighsearchComponent implements OnInit {

  source;
  dest;
  count;
  flightlist;
  constructor(
    private flightService: FlightserviceService
  ) { }

  ngOnInit() {
  }
  flightSearch()
  {
    console.log(this.source,this.dest,this.count);
    this.flightService.flightSearch(this.source,this.dest,this.count)
    .subscribe(response=>{
      this.flightlist = response;
      console.log('response is=',response)
    },
    error=>{
      console.log('error is=',error)
    })
  }
  
}
