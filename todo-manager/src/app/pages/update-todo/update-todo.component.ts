import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css'],
})
export class UpdateTodoComponent implements OnInit {
  todo = new Todo();

  constructor(
    private _apiService: ApiService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    const todoId = this._activatedRoute.snapshot.paramMap.get('todoId');
    console.log(todoId);

    this._apiService.getTodo(todoId || '').subscribe({
      next: (data) => {
        this.todo = data;
        console.log(this.todo);
      },
      error: (data) => {},
      complete: () => {},
    });
  }

  updateTodo(event: SubmitEvent) {
    this._apiService.updateTodo(this.todo.id, this.todo).subscribe({
      next: (data) => {
        alert('Updated');
        this.todo = data;
        this._router.navigate(['/view-todos'])
      },
      error: (err) => {
        console.log(err);
        alert('Not updated');
      },
    });
  }
}
