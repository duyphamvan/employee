import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import {HttpClientModule} from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { FormsModule} from '@angular/forms';
import { EmployeeshowComponent } from './employeeshow/employeeshow.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    FormComponent,
    EmployeeshowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
