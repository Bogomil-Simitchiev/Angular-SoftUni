import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IUser } from './interfaces/user';
import { Employee } from './interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private URL = 'http://localhost:3030/data';

  constructor(private httpClient: HttpClient) {
  }

  getAllEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.URL}/employees`);
  }
}
