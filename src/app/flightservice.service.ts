import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Flight } from './flight';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightserviceService {

  private url:string;
  private url1:string;
  private url2:string;
  
  constructor(private http:HttpClient)
   { 
    this.url="http://localhost:8080/flyaway_crud_rest_Api/flight";
    this.url1="http://localhost:8080/flyaway_crud_rest_Api/login";
    this.url2="http://localhost:8080/flyaway_crud_rest_Api";
  }
  
  public flightSearch(source:any,dest:any,count:any)
  {
    return this.http.get(this.url+"/"+source+"/"+dest+"/"+count);
  }
  public login(username:any,password:any)
  {
    return this.http.get(this.url1+"/"+username+"/"+password);
  }
 public addflight(flight)
 {
  //  var headers = new HttpHeaders()
  //  headers.set("Access-Control-Allow-Origin","*")
  // return this.http.post(this.url, flight,{headers: headers});
  return this.http.post(this.url,flight);
 } 
 public flightbyID(id:number)
 {
   return this.http.get(this.url+"/"+id);
 }
public getallflights()
{
return this.http.get(this.url);
}
public passengerbyID(id:number)
{
  return this.http.get(this.url2+"/"+"passenger"+"/"+id);
}
public register(details)
{
  return this.http.post(this.url1,details);
}
public removeflight(id:number)
{
  return this.http.delete(this.url+"/"+id);
}
public updateflight(flight)
{
  return this.http.post(this.url + "/" + "update",flight);
}
}