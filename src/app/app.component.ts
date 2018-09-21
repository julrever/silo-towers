import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public towers: Indicator[];
  public height: number[] = new Array(8);
  title = 'silo-towers';

  constructor(private httpClient: HttpClient){}

   getData(){
    this.httpClient.get('https://api.myjson.com/bins/ozg1g').subscribe(
      (data) => {
        this.towers = data as Array<Indicator>;

        for (var i=0; i<8; i++){
          var tmp = this.towers[i];

          if (tmp.value > tmp.maxValue){
            this.height[i]=Math.round(100+(tmp.value-tmp.maxValue)/
            (tmp.maxValue-tmp.minValue)/0.01);
          } else if (tmp.value < tmp.minValue){
            this.height[i]=Math.round((tmp.value-tmp.minValue)/
            (tmp.maxValue-tmp.minValue)/0.01)
          } else {
            this.height[i]=Math.round(tmp.value/
            (tmp.maxValue-tmp.minValue)/0.01);
          }
        }
      }
    )
  }

  ngOnInit() {
     this.getData();
  }
}

class Indicator {
  public id: string;
  public title: string;
  public value: number;
  public minValue: number;
  public maxValue: number;
}
