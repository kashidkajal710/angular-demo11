import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
message:string="Datta";
cityName:string="";
cityNames:string[]=["chennai","Bangalore","Hyderabad","Ahmedabad","Surat","Maharashtra"]
}