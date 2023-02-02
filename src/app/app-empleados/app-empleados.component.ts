import { Component, Input } from '@angular/core';
import { DataServices } from '../data.services';
import { EmpleadosService } from '../empleados.service';
import { ServicioPruebaService } from '../servicio-prueba.service';
import { empleado } from './empleadomodel';


@Component({
  selector: 'app-empleados',
  templateUrl: './app-empleados.component.html',
  styleUrls: ['./app-empleados.component.scss']
})
export class AppEmpleadosComponent {

  cities = [{
    code: '21',
    name: 'phone'
  }];

  constructor(private miServicio:ServicioPruebaService, private empleadoService:EmpleadosService, private dataService:DataServices) {
    this.cities = [
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'}
    ];

    this.empleadoService.obtenerEmpleados().subscribe(misEmpleado=>{
      console.log(misEmpleado);
      this.empleados=Object.values(misEmpleado);

      this.empleadoService.setEmpleados(this.empleados);
    });
}

empleados:empleado[]=[];


agregarEmpleado():any{
  let miEmpleado=new empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

  this.empleadoService.agregarEmpleadoService(miEmpleado);
}
cuadroNombre:string="";
cuadroApellido:string="";
cuadroCargo:string="";
cuadroSalario:number=0;

items=[''];
addItem(newItem: string){
  this.items.push(newItem);
}

}

/* "{color:cargo==='director' ? 'red' : 'black'}" */
