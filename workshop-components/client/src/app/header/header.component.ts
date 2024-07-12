import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  user: string;
  constructor(private employeeService: EmployeesService) { }

  loginUser(): void {
    this.employeeService.login();
    this.user = localStorage.getItem('user')!;
  }
  logoutUser(): void {
    this.employeeService.logout();
    this.user = localStorage.getItem('user')!;
  }

}
