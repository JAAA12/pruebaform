import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { empleado } from '../app-empleados/empleadomodel';
import { EmpleadosService } from '../empleados.service';
import { ServicioPruebaService } from '../servicio-prueba.service';

@Component({
  selector: 'proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.scss']
})
export class ProyectosComponentComponent {
  constructor(private router:Router, private miServicio:ServicioPruebaService,private route:ActivatedRoute, private empleadoService:EmpleadosService){

    /* this.empleados=this.empleadoService.empleados */


    this.i=this.route.snapshot.params['id']

    let empleado:empleado=this.empleadoService.encontrarEmpleado(this.i);
    this.cuadroNombre=empleado.nombre;
    this.cuadroApellido=empleado.apellido;
    this.cuadroCargo=empleado.cargo;
    this.cuadroSalario=empleado.salario;

    this.accion=parseInt(this.route.snapshot.queryParams['accion']);


  }
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

}

  volverHome(){
    this.router.navigate([''])
  }
  empleados:empleado[]=[];


/* actualizarEmpleado():any{
  let miEmpleado=new empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

  this.empleadoService.actualizarEmpleado(this.i, miEmpleado);
  this.router.navigate([''])
}

eliminaEmpleado(){
  this.empleadoService.eliminarEmpleado(this.i);
  this.router.navigate([''])
} */
accion:number;
actualizarEmpleado():any{
  if (this.accion==1) {
    let miEmpleado=new empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    this.empleadoService.actualizarEmpleado(this.i, miEmpleado);
    this.router.navigate([''])
  }else{

    this.empleadoService.eliminarEmpleado(this.i);
    this.router.navigate([''])
  }
}

cuadroNombre:string="";
cuadroApellido:string="";
cuadroCargo:string="";
cuadroSalario:number=0;
i:number;


}
