import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Todo {
  title: string;
  isCompleted: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  todos: Todo[] = [
    { title: 'Task 1', isCompleted: true },
    { title: 'Task 2', isCompleted: false },
    { title: 'Task 3', isCompleted: true },
    { title: 'Task 4', isCompleted: false },
  ];

  handleChangeTodoCompleted(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
  }
}
