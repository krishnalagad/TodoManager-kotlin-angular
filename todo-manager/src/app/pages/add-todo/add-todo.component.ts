import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  todo = new Todo();

  constructor(private _apiService: ApiService) {}

  submitForm(event: SubmitEvent) {
    event.preventDefault();
    console.log(this.todo);

    this._apiService.addTodo(this.todo).subscribe({
      next: (data) => {
        console.log(data);
        alert('todo added');
        this.todo = new Todo();
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
