import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../../../employees.service';
import { Employee } from '../../../interfaces/employee';
import { CommonModule } from '@angular/common';
import { IUser } from '../../../interfaces/user';
import { AuthService } from '../../../auth.service';
import { femalePath } from '../assets/femaleUrlPhoto';
import { malePath } from '../assets/maleUrlPhoto';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [CommonModule],
  providers: [EmployeesService],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit {
  user: IUser;
  employee: Employee;
  photoUrl: string;
  detailUserId = this.router.snapshot.params['_id'];
  constructor(private employeesService: EmployeesService, private authService: AuthService, private router: ActivatedRoute) { }
  ngOnInit(): void {
    this.employeesService.getEmployeeById(this.detailUserId).subscribe((employee) => {
      this.employee = employee;
      this.photoUrl = this.employee.gender === 'Female' ? femalePath : malePath;
    })

    this.authService.user.subscribe(user => {
      this.user = user;
    });
  }


}
