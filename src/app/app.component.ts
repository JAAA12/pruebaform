import { Component, Injectable } from '@angular/core';
import firebase from 'firebase/compat/app'
import { LoginService } from './login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Injectable()
export class AppComponent {
  constructor(private loginService:LoginService){}


ngOnInit(): void {
  firebase.initializeApp({
    apiKey:"AIzaSyCo1WXWlUy5-If6qVYtxxB5uMwoV3aaczA",
    authDomain:"prueba-d8a17.firebaseapp.com",
  })

}

estarLogueado(){
  return this.loginService.estaLogueado()
}

estarLogout(){
  return this.loginService.estaLogout()
}


}
