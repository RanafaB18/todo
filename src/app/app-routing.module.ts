import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTodoComponent } from './container/todo-view/create-todo/create-todo.component';
import { TodoListComponent } from './container/todo-view/todo-list/todo-list.component';

const routes: Routes = [
  {
    path: '', redirectTo: "todo-list", pathMatch: "full"
  },
  {
    path:'create-todo', component: CreateTodoComponent
  },
  {
    path:'todo-list', component: TodoListComponent,
  },
  {
    path:'edit-todo/:id', component: CreateTodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
