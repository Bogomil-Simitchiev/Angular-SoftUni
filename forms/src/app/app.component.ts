import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExamplesComponent } from './examples/examples.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReacitveFormComponent } from "./reacitve-form/reacitve-form.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExamplesComponent, TemplateDrivenFormComponent, ReacitveFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forms';
}
