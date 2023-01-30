import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminGuard } from './guard/admin.guard';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DisplaycartComponent } from './displaycart/displaycart.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"Register",
    component:RegisterComponent
  },
  {
    path:"Login",
    component:LoginComponent
  },
  {
    path:"Home",
    component:HomeComponent
  },
  {
    path:"Admin",
    component:AdminComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:"add",
        component:AddProductComponent
      },
      {
        path:"edit",
        component:EditProductComponent
      }
    ]
  },
  {
    path:"AdminLogin",
    component:AdminLoginComponent
  },
  {
    path:"Dashboard",
    component:DashboardComponent,
  },{
    path:"AddtoCart",
    component:AddtocartComponent,
  },{
    path:"DisplayCart",
    component:DisplaycartComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
