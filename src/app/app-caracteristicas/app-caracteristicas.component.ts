import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioPruebaService } from "../servicio-prueba.service";

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './app-caracteristicas.component.html',
  styleUrls: ['./app-caracteristicas.component.scss']
})
export class AppCaracteristicasComponent {

  @Output() newItemEvent= new EventEmitter<string>();

  constructor(private miServicio:ServicioPruebaService){}

  agregarCaracteristicas(value:string){
    this.miServicio.muestraMensaje(value);
    this.newItemEvent.emit(value)

}
}
