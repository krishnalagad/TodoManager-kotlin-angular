import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-todos',
  templateUrl: './view-todos.component.html',
  styleUrls: ['./view-todos.component.css'],
})
export class ViewTodosComponent implements OnInit {
  todos: Todo[] = [];
  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    this._apiService.getTodos().subscribe({
      next: (data) => {
        console.log(data);
        this.todos = data;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('request completed');
      },
    });
  }
}
