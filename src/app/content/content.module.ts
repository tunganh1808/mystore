import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';


const contentRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }
  ,
  {
    path: 'login',
    component: LoginComponent
  }
  ,
  {
    path: 'product',
    component: ProductComponent
  }
  ,
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
]
@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(contentRoutes)
  ]
})
export class ContentModule { }
