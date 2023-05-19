import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { AddTodoComponent } from './pages/add-todo/add-todo.component';
import { ViewTodosComponent } from './pages/view-todos/view-todos.component';
import { UpdateTodoComponent } from './pages/update-todo/update-todo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodoViewComponent } from './components/todo-view/todo-view.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddImageJsonFormComponent } from './pages/add-image-json-form/add-image-json-form.component';
import { SendEmailComponent } from './pages/send-email/send-email.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddTodoComponent,
    ViewTodosComponent,
    UpdateTodoComponent,
    NavbarComponent,
    FooterComponent,
    TodoViewComponent,
    PageNotFoundComponent,
    AddImageJsonFormComponent,
    SendEmailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot({
      text: "Please wait.."
    }),
    NgxUiLoaderRouterModule.forRoot({
      showForeground: false
    }),
    NgxUiLoaderHttpModule.forRoot({
      showForeground: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
