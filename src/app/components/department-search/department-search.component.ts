import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee-service.service';
import { FormsModule } from '@angular/forms';
import { EmployeeTableComponent } from '../employee-table/employee-table.component';

@Component({
  selector: 'app-department-search',
  standalone: true,
  imports: [FormsModule, EmployeeTableComponent],
  templateUrl: './department-search.component.html',
  styleUrl: './department-search.component.scss'
})
export class DepartmentSearchComponent {
  departmentId: string = '';
  employees: any[] = [];

  constructor(private employeeService: EmployeeService) { }

  searchEmployees() {
    if (this.departmentId.trim()) {
      this.employeeService.getEmployeesByDepartment(this.departmentId).subscribe(data => {
        this.employees = data;
      });
    }
  }
}
