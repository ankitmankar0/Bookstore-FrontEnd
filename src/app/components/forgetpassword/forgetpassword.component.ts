import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
forgotForm!: FormGroup;
  constructor(private formbuilder:FormBuilder, private user:UserService) { }

  ngOnInit(): void {
    this.forgotForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(){
    
  }

}
