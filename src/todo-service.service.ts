import { Injectable } from '@angular/core';
import { todo } from './interfaces';
import { v4 as uuid } from 'uuid'
@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  todoItems: todo[] = [
    { completed: false, whatToDo: 'Pray', id: "one" },
    { completed: false, whatToDo: 'Learn', id: "two" },
    { completed: false, whatToDo: 'Eat', id: "three" },
    { completed: false, whatToDo: 'Run', id: "four" },
  ];
  flag = false

  constructor() {}

  getTodos() {
    return this.todoItems;
  }

  setTodo(todo: todo) {
    this.todoItems.push(todo);
  }

  deleteTodo(id: string) {
    this.todoItems = this.todoItems.filter((item) => item.id !== id);
  }

  getTodoWithId(id: string) {
    return this.todoItems.find((todo) => todo.id === id);
  }

  updateTodoWithId(newTodo: todo) {
    this.todoItems = this.todoItems.map((todo) => {
      if (todo.id === newTodo.id) {
        return newTodo;
      }
      return todo;
    });
  }

  getID() {
    return uuid()
  }
}
