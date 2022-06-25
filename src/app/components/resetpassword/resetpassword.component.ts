import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetPassForm!: FormGroup;
  token:any

  constructor(private formBuilder: FormBuilder, private userservice: UserService,  private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.token = this.activateRoute.snapshot.paramMap.get('token')
    this.resetPassForm = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmNewPassword: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  onSubmit(){
    let data={
      newPassword:this.resetPassForm.value.newPassword,
      confirmPassword:this.resetPassForm.value.confirmNewPassword}
      console.log(this.token)
    this.userservice.resetpassword(data, this.token).subscribe((res:any)=>{
      console.log(res);
    })
  }

}
