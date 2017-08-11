import { Component } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  myData: Array<any>;
  api:string;

  constructor(private http:Http){
    this.api = 'https://jsonplaceholder.typicode.com/photos';  
    this.http.get(this.api)
      .map(response => response.json())
      .subscribe(res => this.myData = res);
    
  }

}
