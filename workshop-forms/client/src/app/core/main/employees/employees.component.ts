import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../../../interfaces/employee';
import { IUser } from '../../../interfaces/user';
import { EmployeesService } from '../../../employees.service';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  @Input() employees: Employee[];
  @Input() emailVisibility: boolean[];
  user: IUser;

  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      this.user = user;
    });
  }
 
  toggleEmailVisibility(index: number) {
    this.emailVisibility[index] = !this.emailVisibility[index];
  }

  isEmailVisible(index: number): boolean {
    return this.emailVisibility[index];
  }
}
