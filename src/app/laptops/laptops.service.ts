import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Busqueda} from "../modelos/busqueda"

@Injectable({
  providedIn: 'root'
})
export class LaptopsService {

  laptopUrl= 'http://localhost:8080/';

  constructor(private httpCliente:HttpClient) { }

  marcas(): Observable<any[]>{ 
    return this.httpCliente.get<any[]>(this.laptopUrl + 'marcas/lista');
  }
  laptops(busqueda:Busqueda): Observable<any[]>{
    return this.httpCliente.post<any[]>(this.laptopUrl + 'laptop/list',busqueda);
  }
}
