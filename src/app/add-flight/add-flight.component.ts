import { Component, OnInit } from '@angular/core';
import { FlightserviceService } from '../flightservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  flight;
  addedflight;
  
  constructor(
    private service: FlightserviceService,
    private router : Router
  ) { }

  ngOnInit() {
    this.flight = {
      "airline": {
        "airlineId": null ,
        "airlineName": ""
    },
    "available_seats": null,
    "date": "",
    "flightCode": "",
    "flightId": null,
    "price": null,
    "route": {
        "destination": "",
        "routeId": null,
        "source": ""
    }
    }
  }
  addflight()
  {
    this.service.addflight(this.flight).subscribe(response =>{
      console.log(response)
      this.addedflight = response;
      this.router.navigate(['/flightlist'])
      
    },
    error=>{
      console.log(error)
    })
  }
  }

  

