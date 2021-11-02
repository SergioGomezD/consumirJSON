import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articulos=null;

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.http.get("https://www.datos.gov.co/resource/ewej-2idm.json")
    .subscribe(
      result => {
        this.articulos = result;
      },
      error => {
        console.log('problemas');
      }
    );
  }
}
