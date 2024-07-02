import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Todo, TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoService } from '../todo.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [TodoService]
})
export class HomeComponent implements OnInit {
  todos: Todo[] = [];

  handleMarkAllTasksAsCompleted() {
    this.todos.map(t => t.isCompleted = true);
  }
  handleFilterLowerTodos() {
    this.todos = this.todos.filter((t, index) => index < 4);
  }
  handleChangeTodoCompleted(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
  }
  constructor(private myService: TodoService) {

  }
  ngOnInit(): void {
    this.myService.getTodos().pipe(map(todosValues => todosValues.filter((t, i) => i <= 9))
    ).subscribe(todos => {
      this.todos = todos;
    });

  }
}
