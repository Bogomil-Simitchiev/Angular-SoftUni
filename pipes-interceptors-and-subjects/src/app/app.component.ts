import { DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShortenPipe } from './shorten.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UpperCasePipe,LowerCasePipe, DatePipe, ShortenPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipes-interceptors-and-subjects';
  date =  new Date();
}
