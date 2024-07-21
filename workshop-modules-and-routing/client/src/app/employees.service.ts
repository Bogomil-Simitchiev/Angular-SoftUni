import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IUser } from './interfaces/user';
import { Employee } from './interfaces/employee';

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
  getUserFromLocalStorage(): IUser {
    return JSON.parse(localStorage.getItem('user')!);
  }

  login(): IUser {
    localStorage.setItem('user', JSON.stringify({ name: 'John', age: 25 }));
    return this.getUserFromLocalStorage();
  }
  logout(): IUser {
    localStorage.clear();
    return this.getUserFromLocalStorage();
  }
}
