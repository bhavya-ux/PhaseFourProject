import { Component, OnInit } from '@angular/core';
import { FlightserviceService } from '../flightservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateflight',
  templateUrl: './updateflight.component.html',
  styleUrls: ['./updateflight.component.css']
})
export class UpdateflightComponent implements OnInit {
  flight
  updates;
  constructor(
    private service : FlightserviceService,
    private router: Router
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
  updateflight()
    {
      this.service.updateflight(this.flight).subscribe(response =>{
        console.log(response)
        this.updates = response;
        this.router.navigate(['/flightlist'])
   
      },
      error=>{
        console.log(error)
      })
    }
    }
  

