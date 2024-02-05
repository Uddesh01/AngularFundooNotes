import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerFrom!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,public router: Router) { }

  ngOnInit(){
    this.registerFrom=this.formBuilder.group({
      userName:['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      userContact:['',[Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword:['',[Validators.required]]
    })
  }
  get f() { return this.registerFrom.controls; }
  
  handleNavigation() {
    this.router.navigate(["/login"])
  }

  handleRegisterClick(){
    this.submitted=true,
    console.log(this.registerFrom.invalid)
  }
  handleSignInInstedClick(){
    this.router.navigate(["/login"]);
  }
}
