import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlighsearchComponent } from './flighsearch/flighsearch.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { FlightbyIdComponent } from './flightby-id/flightby-id.component';
import { FlightlistComponent } from './flightlist/flightlist.component';
import { PassengerbyIdComponent } from './passengerby-id/passengerby-id.component';
import { RemoveflightComponent } from './removeflight/removeflight.component';
import { UpdateflightComponent } from './updateflight/updateflight.component';


const routes: Routes = [
  {path:"flighsearch",component:FlighsearchComponent},
  {path:"addflight",component:AddFlightComponent},
  {path:"flightbyID",component:FlightbyIdComponent},
  {path:"flightlist",component:FlightlistComponent},
  {path:"passengerbyId",component:PassengerbyIdComponent},
  {path:"removeflight",component:RemoveflightComponent},
  {path:"updateflight",component:UpdateflightComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
