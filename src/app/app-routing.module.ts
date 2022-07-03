import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { GetallbooksComponent } from './components/getallbooks/getallbooks.component';
import { LoginComponent } from './components/login/login.component';
import { QuickviewComponent } from './components/quickview/quickview.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { OrderComponent } from './order/order.component';
import { AuthguardService } from './services/authService/authguard.service';


const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'forgot', component: ForgetpasswordComponent},
  {path:'reset/:token',component: ResetpasswordComponent},
  {path:'',redirectTo:"/login",pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent,
  children:[
    {path: 'GetAllbooks', component: GetallbooksComponent},
    {path:'quickview/:bookId',component: QuickviewComponent},
    {path:'cart',component:CartComponent},
    {path:'wish', component:WishlistComponent},
    {path:'order', component:OrderComponent},
  
  ],

},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
