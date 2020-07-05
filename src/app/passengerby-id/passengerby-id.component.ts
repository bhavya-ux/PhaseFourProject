import { Component, OnInit } from '@angular/core';
import { FlightserviceService } from '../flightservice.service';

@Component({
  selector: 'app-passengerby-id',
  templateUrl: './passengerby-id.component.html',
  styleUrls: ['./passengerby-id.component.css']
})
export class PassengerbyIdComponent implements OnInit {
  id;
  result;
  constructor(
    private passengerservice : FlightserviceService
  ) { }

  ngOnInit() {
  }
passengerbyID(id:this)
{
  {
    this.passengerservice.passengerbyID(this.id)
    .subscribe(response=>{
      this.result = response[0];
      console.log('response is=',this.result);
    },
    error=>{
      console.log('error is=',error)
    })
}

}
}
