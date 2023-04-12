import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http:HttpClient) { }

  addEmployee(data: any): Observable<any>{
    return this._http.post('http://localhost:3000/employees', data);
  }

  getEmployeeList(): Observable<any>{
    return this._http.get('http://localhost:3000/employees');
  }

  deleteEmployee(id: any): Observable<any>{
    return this._http.delete('http://localhost:3000/employees/'+id);
  }
}
