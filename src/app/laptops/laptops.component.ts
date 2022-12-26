import { Component, OnInit } from '@angular/core';
import { Busqueda } from '../modelos/busqueda';
import { LaptopsService } from './laptops.service';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {

  laptops: any[] = [];
  marcas: any[] = [];
  marcaElegida: any = null;
  busqueda: Busqueda = {
    marca: '',
    modelo: '',
    version: '',
    nuevo: '',
    color: '',
    precioDesde: 0,
    precioHasta: 5000
  }



  constructor(private laptopService: LaptopsService) { }

  ngOnInit() {
    this.listarMarcas();
    this.listarLaptops();
  }

  listarMarcas(): void {
    this.laptopService.marcas().subscribe(
      data => { this.marcas = data; },
      err => { console.log(err); }
    );
  }

  listarLaptops(): void {
    this.laptopService.laptops(this.busqueda).subscribe(
      data => { this.laptops = data; },
      err => { console.log(err); }
    );
  }

  onChangeMarca(): void {
    if (this.marcaElegida) {
      this.busqueda.marca = this.marcaElegida.nombre;
    } else {
      this.busqueda.marca = '';
      this.busqueda.modelo ='';
    }
    this.listarLaptops();
  }

  clearVersion(): void {
    this.busqueda.version = '';
    this.listarLaptops();
  }

  clearPrecioDesde(): void {
    this.busqueda.precioDesde = 0;
    this.listarLaptops();
  }

  clearPrecioHasta(): void {
    this.busqueda.precioHasta = 5000;
    this.listarLaptops();
  }

  clear(): void {
    this.marcaElegida = null;
    this.busqueda.marca = '';
    this.busqueda.modelo = '';
    this.busqueda.version = '';
    this.busqueda.nuevo = '';
    this.busqueda.color = '';
    this.busqueda.precioDesde = 0;
    this.busqueda.precioHasta = 5000;
    this.listarLaptops();
  }


}
