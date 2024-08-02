// src/app/services/users.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpBackend, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenInterceptor } from './token.interceptor';

export interface Employee {
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  salary: number;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private httpClient: HttpClient;

  constructor(private handler: HttpBackend) {
    // Create HttpClient with the interceptor
    const interceptor = new TokenInterceptor();
    const interceptingHandler = {
      handle: (req: HttpRequest<any>) => interceptor.intercept(req, handler)
    };
    this.httpClient = new HttpClient(interceptingHandler as HttpHandler);
  }

  getAllEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`https://jsonplaceholder.typicode.com/users`);
  }
}
