import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/user';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../auth.service';
import { MessageBusService, MessageType } from '../../message-bus.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  user: IUser;
  private subscription: Subscription;

  constructor(private authService: AuthService, private messageBusService: MessageBusService) { }

  message: string;
  isMessageError: boolean;

  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      this.user = user;
    });
    this.subscription = this.messageBusService.onNewMessage$.subscribe(newMessage => {
      this.message = newMessage.text || '',
        this.isMessageError = newMessage.type === MessageType.Error

      if (this.message) {
        setTimeout(() => {
          this.messageBusService.clear();
        }, 3000);
      }
    })

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  logoutUser() {
    this.authService.logout();
  }

}
