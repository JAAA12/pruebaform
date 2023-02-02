import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { empleado } from "./app-empleados/empleadomodel";
import { LoginService } from "./login/login.service";

@Injectable()
export class DataServices{
  constructor(private httClient:HttpClient, private loginService:LoginService){}

  cargarEmpleados(){

    const token=this.loginService.getIdToken();
    return this.httClient.get('https://prueba-d8a17-default-rtdb.firebaseio.com/datos.json?auth='+ token);
  }

  guardarEmpleados(empleados:empleado[]){
    this.httClient.put('https://prueba-d8a17-default-rtdb.firebaseio.com/datos.json',empleados).subscribe({
     next: response=>{console.log('se guardaron los empleados: '+ response);},
     error:error=> {console.log('Error: '+ error)}
  });
  }

  modificarEmpleado(i:number, empleado:empleado){
    let url='https://prueba-d8a17-default-rtdb.firebaseio.com/datos/'+i+'.json'

    this.httClient.put(url,empleado).subscribe({
     next: response=>{console.log('se ha modificado los empleados: '+ response);},
     error:error=> {console.log('Error: '+ error)}
  });
  }

  eliminaEmpleados(i:number){
    let url='https://prueba-d8a17-default-rtdb.firebaseio.com/datos/'+i+'.json'

    this.httClient.delete(url).subscribe({
     next: response=>{console.log('se ha eliminado los empleados: '+ response);},
     error:error=> {console.log('Error: '+ error)}
  });
  }
}
/* el método put reemplaza la información que hay en la base de datos, asi solo se sube un array con la información ingrsada */
