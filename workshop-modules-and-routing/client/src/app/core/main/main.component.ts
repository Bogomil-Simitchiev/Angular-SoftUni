import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from '../../employees/employees.component';
import { EmployeesService } from '../../employees.service';
import { Employee } from '../../interfaces/employee';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, EmployeesComponent],
  providers: [EmployeesService],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  employees: Employee[];
  emailVisibility: boolean[];

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.employeesService.getAllEmployees().subscribe(currentEmployees => {
      this.employees = Object.values(currentEmployees);
      this.emailVisibility = new Array(this.employees.length).fill(true);
    });
  }
}
