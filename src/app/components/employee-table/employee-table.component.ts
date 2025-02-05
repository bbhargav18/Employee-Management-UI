import { Component, Input } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeService } from '../../services/employee-service.service';

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [NgIf, NgFor, RouterModule],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.scss'
})
export class EmployeeTableComponent {
  @Input() employees: any[] = [];

  constructor(private employeeService: EmployeeService) { }

  deleteEmployee(employeeId: string): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(employeeId).subscribe(() => {
        alert('Employee deleted successfully');
        window.location.reload();
      }, error => {
        console.error('Error deleting employee:', error);
        alert('Failed to delete employee');
      });
    }
  }
}
