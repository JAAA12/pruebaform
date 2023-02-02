import { Inject, Injectable } from "@angular/core";
import { empleado } from "./app-empleados/empleadomodel";
import { DataServices } from "./data.services";
import { ServicioPruebaService } from "./servicio-prueba.service";

@Injectable()
export class EmpleadosService{

  constructor(private servicioAlert: ServicioPruebaService, private dataService:DataServices){

  }

  obtenerEmpleados(){
    return this.dataService.cargarEmpleados();
  }

  setEmpleados(misEmpleados:empleado[]){
    this.empleados=misEmpleados;
  }


  agregarEmpleadoService(miEmpleado:empleado){
    this.servicioAlert.muestraMensaje("Persona que se va a agregar: "+"/n"+ empleado.name)
    this.empleados.push(miEmpleado);

    this.dataService.guardarEmpleados(this.empleados);
  }

  empleados:empleado[]=[];

  encontrarEmpleado(i:number){
    let empleado:empleado=this.empleados[i];
    return empleado;
  }
  actualizarEmpleado(i:number, empleado:empleado){
    let empleadoModificado=this.empleados[i];

    empleadoModificado.nombre=empleado.nombre;
    empleadoModificado.apellido=empleado.apellido;
    empleadoModificado.cargo=empleado.cargo;
    empleadoModificado.salario=empleado.salario;

    this.dataService.modificarEmpleado(i,empleado)
  }

  eliminarEmpleado(i:number){
    this.empleados.splice(i,1);
    this.dataService.eliminaEmpleados(i);
    if(this.empleados!=null){

      this.dataService.guardarEmpleados(this.empleados);
    }
  }
}
