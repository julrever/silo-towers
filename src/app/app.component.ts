import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private httpClient: HttpClient){}
  getData(){
    this.httpClient.get('http://demo1110987.mockable.io/silo-towers').subscribe(
      (data:any[]) => {
        console.log(data);
      }
    )
  }
  title = 'silo-towers';
}
class Indicator{
  public id: string;
  public title: string;
  public value: number;
  public minValue: number;
  public maxValue: number;
}
