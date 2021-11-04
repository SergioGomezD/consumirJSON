import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsumoService {
  items:any={};
  constructor(private http:HttpClient) {
    console.log('funcionando!')
    this.http.get("https://www.datos.gov.co/resource/6he3-5m6n.json")
    .subscribe(
      result => {
        this.items = result;
        console.log(result)
      },
      error => {
        console.log('problemas');
      }
    );
  }
}
