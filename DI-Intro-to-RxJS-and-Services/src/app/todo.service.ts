import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './todo-item/todo-item.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private httpClient: HttpClient) { }

  // It's an example with Fetch API
  // getData(url: string): Promise<Todo[]> {
  //   return fetch(url).then(res => res.json());
  // }

  // This is an example with HttpClient
  getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.url);
  }


}