import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { GetallbooksComponent } from './components/getallbooks/getallbooks.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';


const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path:'',redirectTo:"/login",pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'forgot', component: ForgetpasswordComponent},
  {path:'reset/:token',component: ResetpasswordComponent},
  {path:'dashboard',component:DashboardComponent,
  children:[
    {path: 'GetAllbooks', component: GetallbooksComponent},
  
  ],

},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
