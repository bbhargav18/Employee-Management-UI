import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../models/employee.model';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../services/employee-service.service';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss'
})
export class EmployeeFormComponent implements OnInit {
  employeeForm: FormGroup;
  employeeId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.employeeForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      position: ['', Validators.required],
      salary: ['', [Validators.required, Validators.min(10000)]],
      departmentId: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.employeeId = params.get('id');
      if (this.employeeId) {
        this.employeeService.getEmployeeById(this.employeeId).subscribe(employee => {
          this.employeeForm.patchValue(employee);
        });
      }
    });
  }

  submitForm() {
    if (this.employeeForm.valid) {
      const employeeData: Employee = this.employeeForm.value;
      this.employeeService.addUpdateEmployee(employeeData).subscribe(() => {
        alert('Employee updated successfully!');
        this.router.navigate(['']); 
      }, error => {
        console.error('Error updating employee:', error);
        alert('Failed to update employee');
      });
    }
  }
}
