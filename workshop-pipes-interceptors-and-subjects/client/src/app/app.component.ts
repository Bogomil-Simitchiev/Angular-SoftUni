import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { AuthService } from './auth.service';
import { MessageBusService, MessageType } from './message-bus.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected styleUrl to styleUrls
})
export class AppComponent implements OnInit {
  title = 'DVB Company';
  message: string | null = null;
  isMessageError: boolean = false;

  constructor(private authService: AuthService, private messageBusService: MessageBusService) { }

  ngOnInit(): void {
    this.authService.autoLogin();

    this.messageBusService.onNewMessage$.subscribe(msg => {
      this.message = msg.text;
      this.isMessageError = msg.type === MessageType.Error;
    });
  }
}
