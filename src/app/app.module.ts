import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { TodoViewComponent } from './container/todo-view/todo-view.component';
import { TodoItemComponent } from './container/todo-view/todo-item/todo-item.component';
import { CreateTodoComponent } from './container/todo-view/create-todo/create-todo.component';
import { TodoListComponent } from './container/todo-view/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    TodoViewComponent,
    TodoItemComponent,
    CreateTodoComponent,
    TodoListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
