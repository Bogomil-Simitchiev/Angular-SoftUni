import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Todo, TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
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
  handleMarkAllTasksAsCompleted() {
    this.todos.map(t => t.isCompleted = true);
  }
  handleChangeTodoCompleted(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
  }
}
