import { Component } from '@angular/core';
import { LoginForm } from 'src/app/Interfaces/Auth';
//import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

form:LoginForm={
  email:'',
  password: '',
  //confirmPassword: undefined
}

constructor(private authService:AuthService){}
submit(){
  this.authService.login(this.form);
  
}

isLoading(){
  return this.authService.isLoading;
}

}
