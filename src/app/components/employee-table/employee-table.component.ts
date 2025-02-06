import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() employeeDeleted = new EventEmitter<void>();

  constructor(private employeeService: EmployeeService) { }

  deleteEmployee(employeeId: string): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(employeeId).subscribe(() => {
        alert('Employee deleted successfully');
        this.employeeDeleted.emit();
      }, error => {
        console.error('Error deleting employee:', error);
        alert('Failed to delete employee');
      });
    }
  }
}
