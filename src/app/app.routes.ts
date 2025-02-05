import { Routes } from '@angular/router';
import { DepartmentSearchComponent } from './components/department-search/department-search.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';

export const routes: Routes = [
  { path: '', component: DepartmentSearchComponent },
  { path: 'employee/:id', component: EmployeeDetailsComponent },
  { path: 'employee/:id/edit', component: EmployeeFormComponent }
];
