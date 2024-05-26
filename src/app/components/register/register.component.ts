import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  registerObj: any = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  } 

  constructor(private router: Router){}

  onRegister(){}

}
