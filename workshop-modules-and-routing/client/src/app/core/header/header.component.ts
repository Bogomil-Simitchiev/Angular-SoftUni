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
export class HeaderComponent implements OnInit {
  user: IUser;

  constructor(private employeeService: EmployeesService) { }

  ngOnInit(): void {
    this.user = this.employeeService.getUserFromLocalStorage();
  }

  loginUser(): void {
    this.user = this.employeeService.login();
  }

  logoutUser(): void {
    this.user = this.employeeService.logout();
  }

}
