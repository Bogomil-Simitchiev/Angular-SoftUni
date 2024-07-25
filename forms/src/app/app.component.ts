import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExamplesComponent } from './examples/examples.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExamplesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forms';
}
