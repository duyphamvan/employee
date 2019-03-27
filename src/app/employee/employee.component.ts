import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';
import { Employee } from '../Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public employessDetail: Employee[];
  constructor(private employeeService: EmployeeserviceService) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    //lay ve 1 mang employee va gan gia tri bang = employessDetail
    this.employeeService.getAll().subscribe((data: Employee[]) => {
        this.employessDetail = data;
        // console.log(data)
      });
  }
  
  delete(i){
    //lay ve empl can xoa trong mang employessDetail thong qua index cua empl trong mang employeeDetail
    const empl = this.employessDetail[i];

    //goi ham delete ben service de xoa empl theo id
    this.employeeService.delete(empl.id).subscribe(() => {
      alert("You want to delete user?");

      //ham filter loc nhung phan tu co id khac voi id cua phan tu can xoa
      //sau do gan lai gia tri cho mang employessDetail khong co phan tu can xoa
      this.employessDetail = this.employessDetail.filter(t =>t.id!==empl.id);
    });
  }
}
