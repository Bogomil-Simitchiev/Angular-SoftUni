import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, IRootState, IUserInfo, login, logout, reset } from './+store';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'state-management';

  // Updated observables to select correct slices of the state
  count$: Observable<number> = this.store.select(rootState => rootState.counter);
  user$: Observable<IUserInfo> = this.store.select(rootState => rootState.user);

  constructor(private store: Store<IRootState>) { }

  incrementValue(): void {
    this.store.dispatch(increment());
  }

  decrementValue(): void {
    this.store.dispatch(decrement());
  }

  resetValue(): void {
    this.store.dispatch(reset());
  }

  loginValue(): void {
    this.store.dispatch(login());
  }

  logout(): void {
    this.store.dispatch(logout());
  }
}
