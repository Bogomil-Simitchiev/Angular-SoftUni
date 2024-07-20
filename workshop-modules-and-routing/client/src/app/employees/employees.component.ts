import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from '../interfaces/user';
import { Employee } from '../interfaces/employee';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'] // corrected from styleUrl to styleUrls
})
export class EmployeesComponent implements OnInit {
  @Input() employees: Employee[];
  @Input() emailVisibility: boolean[];
  user: IUser;

  constructor(private employeesService: EmployeesService) { }
  ngOnInit(): void {
    this.user = this.employeesService.getUserFromLocalStorage();
    
  }
  toggleEmailVisibility(index: number) {
    this.emailVisibility[index] = !this.emailVisibility[index];
  }

  isEmailVisible(index: number): boolean {
    return this.emailVisibility[index];
  }
}
