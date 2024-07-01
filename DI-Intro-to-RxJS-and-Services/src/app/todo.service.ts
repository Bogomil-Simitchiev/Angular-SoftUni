import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './todo-item/todo-item.component';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  // It's an example with Fetch API
  // getData(url: string): Promise<Todo[]> {
  //   return fetch(url).then(res => res.json());
  // }

  // This is an example with HttpClient
  getData(url: string): Promise<Todo[]> {
    return firstValueFrom(this.httpClient.get<Todo[]>(url));
  }


}