import { DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShortenPipe } from './shorten.pipe';
import { Employee, UsersService } from './users.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UpperCasePipe, LowerCasePipe, DatePipe, ShortenPipe],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'pipes-interceptors-and-subjects';
  date = new Date();
  users!: Employee[];
  constructor(private employeesService: UsersService) { }

  ngOnInit(): void {
    this.employeesService.getAllEmployees().subscribe(currentEmployees => {
      this.users = Object.values(currentEmployees);
      console.log(this.users);

    });
  }


}
