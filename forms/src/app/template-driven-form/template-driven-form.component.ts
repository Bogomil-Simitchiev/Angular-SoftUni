import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {
  isPasswordCorrect: boolean = true;
  @ViewChild('currentForm') currentForm!: NgForm;
  @ViewChild('password') password!: NgModel;


  handleSubmit() {
    console.log(this.currentForm.value);
    console.log(this.password.value);
    if (this.password.value.length < 5) {
      this.isPasswordCorrect = false;
    } else {
      this.isPasswordCorrect = true;
    }

  }

}
