import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

loginForm!:FormGroup
token:any
  constructor(private formbuilder: FormBuilder, private user:UserService, private router:Router) { 
    this.token = localStorage.getItem("token");
  }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    
  }
  onSubmitloginForm(){
    console.log("Login-inputs", this.loginForm.value);
    if(this.loginForm.valid){
      console.log("valid-Creditionals",this.loginForm.value);
      let data= {
        email:this.loginForm.value.email,
        password:this.loginForm.value.password,
      }
      this.user.login(data).subscribe((res:any)=>{
        console.log(res);
        localStorage.setItem("token", res.data.token);
        this.router.navigateByUrl("/dashboard/GetAllbooks");
       
      })
  }
  else{
    console.log("Enter valid Email And Password!!!!");
  }

  }

}
