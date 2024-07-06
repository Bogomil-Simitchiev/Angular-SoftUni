import { Component, Input } from '@angular/core';
import { Employee } from '../main/main.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {
  // Initialize the visibility state for each employee
  emailVisibility: boolean[] = [];
  @Input() employees: Employee[]
  toggleEmailVisibility(index: number) {
    this.emailVisibility[index] = !this.emailVisibility[index];
  }

  isEmailVisible(index: number): boolean {
    return this.emailVisibility[index];
  }

}
