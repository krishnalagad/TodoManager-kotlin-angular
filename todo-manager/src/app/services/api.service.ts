import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'http://localhost:8080/api/v1/todo';

  constructor(private _httpService: HttpClient) {}

  addTodo(todo: Todo) {
    return this._httpService.post<Todo>(`${this.baseUrl}`, todo);
  }

  getTodos() {
    return this._httpService.get<Todo[]>(`${this.baseUrl}`);
  }

  deleteTodo(todoId: string) {
    return this._httpService.delete(`${this.baseUrl}/${todoId}`);
  }

  getTodo(todoId: string) {
    return this._httpService.get<Todo>(`${this.baseUrl}/${todoId}`);
  }

  updateTodo(todoId: string, todo: Todo) {
    return this._httpService.put<Todo>(`${this.baseUrl}/${todoId}`, todo);
  }
}
