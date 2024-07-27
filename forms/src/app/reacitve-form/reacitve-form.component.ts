import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reacitve-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reacitve-form.component.html',
  styleUrl: './reacitve-form.component.css'
})
export class ReacitveFormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5)]], // Added required validator
    });
  }

  onSubmit() {
    console.log(this.form.value);
    this.form.reset();
  }
}
