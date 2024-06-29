import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Todo {
  title: string;
  isCompleted: boolean;
}

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() completeStateChange: EventEmitter<Todo> = new EventEmitter();

  changeState(todo: Todo) {
    this.completeStateChange.emit(todo);
  }


}
