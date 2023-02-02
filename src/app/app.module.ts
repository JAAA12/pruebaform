import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { AppEmpleadosComponent } from './app-empleados/app-empleados.component';
import { AppCaracteristicasComponent } from './app-caracteristicas/app-caracteristicas.component';
import { ServicioPruebaService } from './servicio-prueba.service';
import { EmpleadosService } from './empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPersonalizadoComponent } from "./error-personalizado/error-personalizado.component";
import { DataServices } from './data.services';
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { LogoutComponent } from './logout/logout.component';
import { CookieService } from 'ngx-cookie-service';
import { LoginGuardian } from './login/login-guardian';



const appRoutes:Routes=[
  {path:'', component:HomeComponentComponent},
  {path:'proyectos/:id', component:ProyectosComponentComponent},
  {path:'quienes', component:QuienesComponentComponent},
  {path:'contacto', component:ContactoComponentComponent, canActivate:[LoginGuardian]},
  {path:'login', component:LoginComponent},
  {path:'logout', component:LogoutComponent},
  {path:'**', component:ErrorPersonalizadoComponent}/* los asterístcos le dicen que si es diferente */
   /* el path del error debe ir SIEMPRE de último */
];


@NgModule({
  declarations: [
    AppComponent,
    AppEmpleadosComponent,
    AppCaracteristicasComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    QuienesComponentComponent,
    ContactoComponentComponent,
    ErrorPersonalizadoComponent,
    LoginComponent,
    LogoutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [ServicioPruebaService, EmpleadosService,DataServices, LoginService, CookieService, LoginGuardian],
  bootstrap: [AppComponent]
})
export class AppModule { }
