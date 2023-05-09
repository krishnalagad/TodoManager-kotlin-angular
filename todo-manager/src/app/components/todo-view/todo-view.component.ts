import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css'],
})
export class TodoViewComponent {
  @Input() todo: Todo = new Todo();
  @Output() deleteEvent: EventEmitter<string> = new EventEmitter();

  constructor(private _apiService: ApiService) {}

  deleteTodo(todoId: string) {
    this._apiService.deleteTodo(todoId).subscribe({
      next: (data) => {
        this.deleteEvent.next(todoId);
        alert('todo deleted..');
      },
      error: (err) => {
        console.log(err);
        alert('error deleting todo');
      },
      complete: () => {
        console.log('request completed.');
      },
    });
  }
}
