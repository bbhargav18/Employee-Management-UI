import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { EmployeeService } from '../../services/employee-service.service';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.scss'
})
export class EmployeeDetailsComponent implements OnInit {
  employee: any;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) {}

  ngOnInit() {
    const empId = this.route.snapshot.paramMap.get('id');
    if (empId) {
      this.employeeService.getEmployeeById(empId).subscribe(data => {
        this.employee = data;
      });
    }
  }
}
