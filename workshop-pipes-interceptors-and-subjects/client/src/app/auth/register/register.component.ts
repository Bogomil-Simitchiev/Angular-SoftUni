import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { customEmailValidator, passwordsMatch } from '../../utils';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(5)]);
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, customEmailValidator()]],
      password: this.passwordControl,
      confirmPassword: ['', [Validators.required, passwordsMatch(this.passwordControl)]],
    });
  }

  handleRegister() {
    this.authService.register(this.form.value, this.router);
  }
}
