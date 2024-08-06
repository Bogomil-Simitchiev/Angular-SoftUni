import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export enum Theme {
  Dark = 'dark',
  Light = 'light'
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  currentTheme: Theme = Theme.Dark;
  private _onThemeChange = new BehaviorSubject<Theme>(this.currentTheme);
  //private _onThemeChangeAsSubject = new Subject<Theme>(); NO INITIAL VALUE!

  onThemeChange$ = this._onThemeChange.asObservable();

  constructor() { }
  changeTheme(newTheme: Theme) {
    this.currentTheme = newTheme;
    this._onThemeChange.next(newTheme);
  }

}
