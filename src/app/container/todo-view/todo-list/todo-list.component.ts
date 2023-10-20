import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { todo } from 'src/interfaces';
import { TodoServiceService } from 'src/todo-service.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit, OnChanges {
  todoItems!: Array<todo>;
  constructor(private _todoService: TodoServiceService){

  }

  ngOnInit(): void {
    this.todoItems = this._todoService.getTodos();
  }

  ngOnChanges(changes: SimpleChanges): void {
    (changes);

  }
  refreshData(todos: todo[]) {
    this.todoItems = todos
  }

  trackByFn(index: number, todo: todo) {
    return todo.id
  }

}
