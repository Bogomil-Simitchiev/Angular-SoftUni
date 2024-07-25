import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-examples',
  standalone: true,
  imports: [CommonModule, HighlightDirective],
  templateUrl: './examples.component.html',
  styleUrl: './examples.component.css'
})
export class ExamplesComponent {
  condition: boolean = true;
  user: { username: string, email: string } | null = JSON.parse(localStorage.getItem('user')!);

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    window.addEventListener('storage', this.storageEventListener.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('storage', this.storageEventListener.bind(this));
  }

  storageEventListener(event: StorageEvent) {
    if (event.key === 'user') {
      this.user = JSON.parse(event.newValue!);
      this.cdr.detectChanges();
    }
  }

  login() {
    const user = { username: 'JohnDoe', email: 'john.doe@example.com' };
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
    this.cdr.detectChanges();
  }

  logout() {
    localStorage.removeItem('user');
    this.user = null;
    this.cdr.detectChanges();
  }
}
