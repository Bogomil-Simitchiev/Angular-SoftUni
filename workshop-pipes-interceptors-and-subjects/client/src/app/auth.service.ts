import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { ILoginData, IRegisterData } from './interfaces/auth';
import { Router } from '@angular/router';
import { MessageBusService, MessageType } from './message-bus.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = 'http://localhost:3030/';

  autoLogin() {
    let userData = this.getUser();

    if (!userData) {
      return;
    }
    if (userData.accessToken) {
      this.userSubject.next(userData);
    }
  }


  // login(email: string, password: string): Observable<ILoginData> {
  //   return this.httpClient.post<ILoginData>(this.URL + "users/login", { email, password });
  // }

  private userSubject: BehaviorSubject<any>;
  public user: Observable<any>;

  constructor(private httpClient: HttpClient, private messageBusService: MessageBusService) {
    this.userSubject = new BehaviorSubject<any>(null);
    this.user = this.userSubject.asObservable();
  }

  login(userData: ILoginData, router: Router) {
    // Perform login logic, then set the user
    this.httpClient.post<ILoginData>(this.URL + "users/login", userData).subscribe(
      response => {
        localStorage.setItem('user', JSON.stringify({ email: response.email, accessToken: response.accessToken, _id: response._id }));
        this.userSubject.next(userData);
        router.navigate(['/home']);
        this.messageBusService.notifyForMessage({ 
          text: 'User successfully logged in',
          type: MessageType.Success
        })
      },
      error => {
        console.error(error)
        // console.error('Login failed:', error);
        // this.messageBusService.notifyForMessage({
        //   text: error?.error?.message,
        //   type: MessageType.Error
        // })
      }
    );
  }
  register(userData: IRegisterData, router: Router) {

    this.httpClient.post<ILoginData>(this.URL + "users/register", { email: userData.email, password: userData.password }).subscribe(
      response => {
        localStorage.setItem('user', JSON.stringify({ email: response.email, accessToken: response.accessToken, _id: response._id }));
        this.userSubject.next(userData);
        router.navigate(['/home']);
      },
      error => {
        console.error('Register failed:', error);
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
