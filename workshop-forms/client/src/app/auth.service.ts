import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ILoginData } from './interfaces/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = 'http://localhost:3030/';


  // login(email: string, password: string): Observable<ILoginData> {
  //   return this.httpClient.post<ILoginData>(this.URL + "users/login", { email, password });
  // }

  private userSubject: BehaviorSubject<any>;
  public user: Observable<any>;

  constructor(private httpClient: HttpClient) {
    this.userSubject = new BehaviorSubject<any>(null);
    this.user = this.userSubject.asObservable();
  }

  login(userData: ILoginData, router: Router) {
    // Perform login logic, then set the user
    this.httpClient.post<ILoginData>(this.URL + "users/login", userData).subscribe(
      response => {
        localStorage.setItem('user', JSON.stringify(response));
        this.userSubject.next(userData);
        router.navigate(['/home']);
      },
      error => {
        console.error('Login failed:', error);
      }
    );
  }

  logout() {
    // Perform logout logic, then clear the user
    localStorage.clear();
    this.userSubject.next(null);
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user')!);
  }
}
