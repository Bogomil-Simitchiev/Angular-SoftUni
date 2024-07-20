import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../employees.service';
import { IUser } from '../../interfaces/user';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  user: IUser;

  constructor(private employeeService: EmployeesService) { }

  loginUser(): void {
    this.employeeService.login();
    this.user = this.employeeService.getUserFromLocalStorage();
  }

  logoutUser(): void {
    this.employeeService.logout();
    this.user = this.employeeService.getUserFromLocalStorage();

  }

}
