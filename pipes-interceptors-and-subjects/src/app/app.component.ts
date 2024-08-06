import { DatePipe, DOCUMENT, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShortenPipe } from './shorten.pipe';
import { Employee, UsersService } from './users.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';
import { HeaderComponent } from "./header/header.component";
import { Theme, ThemeService } from './theme.service';
const darkLogoImage = 'assets/images/dark.png'
const lightLogoImage = 'assets/images/light.png'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UpperCasePipe, LowerCasePipe, DatePipe, ShortenPipe, HeaderComponent],
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
  imageUrl: string = darkLogoImage;
  constructor(private employeesService: UsersService,
    @Inject(DOCUMENT) private document: Document,
    private themeService: ThemeService
  ) {
    this.themeService.onThemeChange$.subscribe(() => {
      const themeValue = this.themeService.currentTheme === Theme.Dark;
      if (themeValue) {
        this.document.body.classList.add('dark-theme');
        this.imageUrl = darkLogoImage;
      } else {
        this.document.body.classList.remove('dark-theme');
        this.imageUrl = lightLogoImage;


      }
    })


  }

  ngOnInit(): void {
    this.employeesService.getAllEmployees().subscribe(currentEmployees => {
      this.users = Object.values(currentEmployees);
      console.log(this.users);

    });
  }


}
