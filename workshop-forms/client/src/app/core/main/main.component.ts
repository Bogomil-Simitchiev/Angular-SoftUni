import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../employees.service';
import { Employee } from '../../interfaces/employee';
import { CommonModule } from '@angular/common';
import { IUser } from '../../interfaces/user';
import { EmployeesComponent } from './employees/employees.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, EmployeesComponent],
  providers: [EmployeesService],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  employees: Employee[];
  emailVisibility: boolean[];
  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.employeesService.getAllEmployees().subscribe(currentEmployees => {
      this.employees = Object.values(currentEmployees);
      this.emailVisibility = new Array(this.employees.length).fill(false);
    });
  }
}
