import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user:UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobileNumber: ['', Validators.required],
    }); 
  }
  
  onSubmit(){
    this.submitted=true;
    console.log("inputs", this.registerForm.value);
    if(this.registerForm.valid){
      console.log("valid-Details",this.registerForm.value);
      let data= {
        FullName:this.registerForm.value.fullName,
        Email:this.registerForm.value.email,
          Password:this.registerForm.value.password,
          MobileNumber:this.registerForm.value.phone,
      }
      this.user.register(data).subscribe((res:any)=>{
        console.log(res);
      })
    }
      else{
        console.log("Enter valid data");
      }  

}
}
