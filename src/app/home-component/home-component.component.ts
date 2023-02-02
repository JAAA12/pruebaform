import { Component } from '@angular/core';
import { ServicioPruebaService } from '../servicio-prueba.service';

@Component({
  selector: 'home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent {
  constructor(private miServicio:ServicioPruebaService){}

  title = 'practica';
  numero1:string="0";
  numero2:string="0";
  resultado:number=0;
  nombre:string="";
  apellido:string="";
  registrado=false;
  mensaje="";

  sumar():void{
    this.resultado = parseInt(this.numero1) + parseInt(this.numero2)
  }

  registrar():void{
    this.registrado=true
  /*   this.miServicio.muestraMensaje('Hola')
    this.mensaje='registrado' */
  }
}
