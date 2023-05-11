import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddTodoComponent } from './pages/add-todo/add-todo.component';
import { ViewTodosComponent } from './pages/view-todos/view-todos.component';
import { UpdateTodoComponent } from './pages/update-todo/update-todo.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home - TODO MANAGER' },
  {
    path: 'add-todo',
    component: AddTodoComponent,
    title: 'Add Task - TODO MANAGER',
  },
  {
    path: 'view-todos',
    component: ViewTodosComponent,
    title: 'View All Todos - TODO MANAGER',
  },
  {
    path: 'update-todo/:todoId',
    component: UpdateTodoComponent,
    title: 'Update Todo - TODO MANAGER',
  },
  { path: '**', component: HomeComponent, title: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
