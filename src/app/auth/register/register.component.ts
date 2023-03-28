import { Component } from '@angular/core';
import { registerForm } from 'src/app/Interfaces/Auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form:registerForm={
    email: '',
    password: '',
    confirmPassword: ''
  }
  constructor(private authService:AuthService){}
  register(){

    this.authService.register(this.form);


  }
  isLoading(){
    return this.authService.isLoading;
  }

}
