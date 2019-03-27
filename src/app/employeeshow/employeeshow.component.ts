import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService} from '../employeeservice.service';
import { Employee } from '../Employee';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-employeeshow',
  templateUrl: './employeeshow.component.html',
  styleUrls: ['./employeeshow.component.css']
})
export class EmployeeshowComponent implements OnInit {
  //khai bao 1 object employee de gan gia tri = employee can show
  employee: Employee;
  
  constructor(private employeeService: EmployeeserviceService, private route: ActivatedRoute) { }

  ngOnInit() {
    //lay ve id cua employee can show
    const id =Number(this.route.snapshot.paramMap.get('id'));

    //lay ve employee can tim va gan gia tri bang employee dong 13, goi ham getEmployeeById ben service
    this.employeeService.getEmployeeById(id).subscribe(
     (data) => {this.employee = data}
    );
  }
}
