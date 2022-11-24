import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  //login Form
  loginForm = this.fb.group({
    acno:[''],
    pswd:['']
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  login(){
    let acno = this.loginForm.value.acno
    let pswd = this.loginForm.value.pswd
    console.log(acno);  
    console.log(pswd);  

    alert('login clicked')

  }
}
