import { Component, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/user';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  user: IUser;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      this.user = user;
    });
  }
  
  logoutUser() {
    this.authService.logout();
  }

}
