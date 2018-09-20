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
    this.httpClient.get('/db1.json').subscribe(
      (data) => {
        this.towers = data as Array<Indicator>;
        for (var i=0; i<8; i++){
          this.height[i]=Math.round(this.towers[i].value/
          (this.towers[i].maxValue-this.towers[i].minValue)/0.01);
          console.log(this.height[i]);
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
