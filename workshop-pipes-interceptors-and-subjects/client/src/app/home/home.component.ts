import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { RouterModule } from '@angular/router';
import { LongtitlePipe } from '../longtitle.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule ,AboutComponent, LongtitlePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent { }