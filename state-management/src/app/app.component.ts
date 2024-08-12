import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, IRootState, reset } from './+store';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'state-management';

  constructor(private store: Store<IRootState>) { }

  count$: Observable<Number> = this.store.select(rootState => rootState.counter);

  incrementValue(): void {
    this.store.dispatch(increment());
  }
  decrementValue(): void {
    this.store.dispatch(decrement());
  }
  resetValue(): void {
    this.store.dispatch(reset());
  }
}
