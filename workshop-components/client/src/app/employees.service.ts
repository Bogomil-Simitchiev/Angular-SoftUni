import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './main/main.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private URL = 'http://localhost:3030/jsonstore';

  constructor(private httpClient: HttpClient) {
  }

  getAllEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.URL}/employees`);
  }

  login(): void {
    localStorage.setItem('user', JSON.stringify({ isLoggedIn: true }));
  }
  logout(): void {
    localStorage.clear();
  }
}
