import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioPruebaService {

  constructor() { }

  muestraMensaje(mensaje:string){
    alert(mensaje);
  }
}
