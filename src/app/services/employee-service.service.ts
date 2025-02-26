import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:8012';
  private http = inject(HttpClient);

  getEmployeesByDepartment(deptId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/employee/department/${deptId}`);
  }

  getEmployeeById(empId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/employee/${empId}`);
  }

  addUpdateEmployee(employee: Employee): Observable<any> {
    return this.http.post<Employee>(`${this.apiUrl}/employee`, employee);
  }

  deleteEmployee(empId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/employee/${empId}`);
  }
}
