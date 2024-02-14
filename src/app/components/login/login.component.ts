import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, public router: Router, public userService: UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['uddesh@gmail.com', [Validators.required, Validators.email]],
      password: ['Uddesh@123', [Validators.required, Validators.minLength(6)]]
    })
  }
  get f() { return this.loginForm.controls; }

  handleLoginClick() {
    this.submitted = true
    console.log(this.loginForm.invalid)
    if (this.loginForm.invalid) return
    const { email, password } = this.loginForm.value
    this.userService.loginCall({
      "userEmail": email,
      "userPassword": password
    }).subscribe(res => {
      localStorage.setItem("authToken",res.data)
      this.router.navigate(["/dashboard/notes"])
    }, err => console.log(err))
  }

  handleRegisterClick() {
    this.router.navigate(["/register"]);
  }
}
