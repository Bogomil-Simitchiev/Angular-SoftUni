import { Component, Input } from '@angular/core';
import { Employee } from '../main/main.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'] // corrected from styleUrl to styleUrls
})
export class EmployeesComponent {
  @Input() employees: Employee[];
  @Input() emailVisibility: boolean[];
  
  toggleEmailVisibility(index: number) {
    this.emailVisibility[index] = !this.emailVisibility[index];
  }

  isEmailVisible(index: number): boolean {
    return this.emailVisibility[index];
  }
}
