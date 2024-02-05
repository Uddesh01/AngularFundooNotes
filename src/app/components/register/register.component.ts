import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerFrom!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,public router: Router, public userService: UserService) { }

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
    this.submitted=true
    console.log(this.registerFrom.invalid)
    if (this.registerFrom.invalid) return
    const { userName,email,userContact, password,confirmPassword } = this.registerFrom.value
    this.userService.registerUserCall({
      "userName":userName,
      "userEmail": email,
      "userContact":userContact,
      "userPassword": password
    }).subscribe(res => console.log(res), err => console.log(err))
  }
  handleSignInInstedClick(){
    this.router.navigate(["/login"]);
  }
}
