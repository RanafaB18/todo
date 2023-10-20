import { Injectable } from '@angular/core';
import { todo } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  todoItems: todo[] = [];

  constructor() { }

  getTodos() {
    return this.todoItems
  }

  setTodo(todo: todo) {
    this.todoItems.push(todo);
  }

  deleteTodo(id: number) {
    this.todoItems = this.todoItems.filter((item) => item.id !== id);
  }

  getTodoWithId(id: number) {
    return this.todoItems.find((todo) => todo.id === id)
  }

  updateTodoWithId(newTodo: todo) {
    this.todoItems = this.todoItems.map((todo) => {
      if (todo.id === newTodo.id) {
        return newTodo
      }
      return todo
    })
  }

  getID() {
    return this.getTodos().length + 1
  }
}
