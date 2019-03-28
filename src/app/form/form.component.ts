import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeserviceService } from '../employeeservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  //khai bao 1 employee de thuc hien two-way binding
  employee: Employee = {
    id: null,
    name: null,
    email: null,
    password: null
  }

  //khai bao 1 mang employee oi de chinh sua
  employeeEdit: Employee[];
  constructor(private employeeService: EmployeeserviceService,
     private activatedRouter: ActivatedRoute,
     private route: Router ) {
    this.editEmployee();
  }

  ngOnInit() {
  }
  
  //khai bao bien id va bien co hieu editting de check trang thai
  id: any;
  editting: boolean = false;
  editEmployee() {
    //lay ve id cua employee can edit
    this.id = this.activatedRouter.snapshot.params['id'];
    // console.log(this.id);

    if (this.id) {
      //check trang thai co phai la editemployee hay khong
      this.editting = true;
      //lay ve tat ca cac employee
      this.employeeService.getAll().subscribe((data: Employee[]) => {
        //sau khi lay ve tat ca employee gan lai gia tri bang mang this.employeeEdit
        this.employeeEdit = data;
        console.log(data);
        //ham find de tim  1 employee trong mang employeeEdit vua gan gia tri co id trung voi id cua employee dong 12
        this.employee = this.employeeEdit.find((m) => {
          return m.id == this.id;
        });
       
        // ham find thuc hien xong tra ve employee can edit
      });
    } else {
      this.editting = false;
    }
  }
  createEmployee() {
    //neu la edit employee thi goi ham edit ben service
    if (this.editting) {
      this.employeeService.edit(this.employee).subscribe(data => { });
      this.route.navigate(['../home']);
    } else {
    //neu la tao moi thi goi ham save ben service
      this.employeeService.save(this.employee).subscribe(data => { });
      this.route.navigate(['../home']);
    }
  }
}
