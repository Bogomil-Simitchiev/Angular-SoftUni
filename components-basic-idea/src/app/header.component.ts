// header.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'header-component',
  standalone: true,
  template: `
    <header>
      <h2>Header Component</h2>
    </header>
  `,
  styles: [`
    header {
      background: #3f51b5;
      color: white;
      padding: 1em;
      text-align: center;
    }
  `]
})
export class HeaderComponent {}
