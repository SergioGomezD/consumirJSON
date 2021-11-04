import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ConsumoService } from './service/consumo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public page!: number;

  constructor(public consumo:ConsumoService){}

  ngOnInit(){

  }
}
