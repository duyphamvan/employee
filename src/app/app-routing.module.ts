import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { FormComponent } from './form/form.component';
import { EmployeeshowComponent} from './employeeshow/employeeshow.component'

const routes: Routes = [
  {path: 'home',  component: EmployeeComponent},
  {path: 'form', component: FormComponent},
  {path: 'form/:id', component: FormComponent},
  {path: 'show/:id', component: EmployeeshowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
