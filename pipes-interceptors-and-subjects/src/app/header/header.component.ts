import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('themeForm') themeForm!: NgForm;

  constructor(private themeService: ThemeService) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.themeForm.setValue({
        theme: this.themeService.currentTheme
      })
    });

    this.themeForm.valueChanges?.subscribe(value => {
      if (value.theme) {

        console.log('value changed ', value);
        this.themeService.changeTheme(value.theme);

      }
    })
  }
}
