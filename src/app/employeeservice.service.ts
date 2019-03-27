import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, from} from 'rxjs';
import {Employee} from './Employee';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
const headers  = new HttpHeaders({'Content-Type':  'application/json'});
@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor(private http: HttpClient) {}
    
  employeeUrl = 'https://laravel-demo-login.herokuapp.com/api/users';

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>('/api/users');
  }

  save(employee: Employee){
    return this.http.post('/api/users/create', employee, {headers: headers});
  }

  getEmployeeById(id: number): Observable<Employee>{
      return this.http.get<Employee>('/api/users/' + id);
  }
  delete(id: number): Observable<any>{
    return this.http.post('/api/users/' + id + '/delete', {headers: headers})
  }
  edit(employee){
    return this.http.post('/api/users/' + employee.id + '/update',employee, {headers: headers})
  }
}
