import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { Form2Component } from './form2/form2.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch: "full"},
 {path:"login", component: LoginComponent},
 {path:"form", component: FormComponent},
 {path:"form2", component: Form2Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
