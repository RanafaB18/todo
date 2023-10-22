import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { todo } from 'src/interfaces';
import { TodoServiceService } from 'src/todo-service.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo !: todo
  @Output() todosChange = new EventEmitter<todo[]>()
  isHovered = false

  constructor(private _todoService: TodoServiceService, private _router: Router) {}
  @HostListener('mouseenter')
  onMouseEnter(){
    this.isHovered = true
  }
  @HostListener('mouseleave')
  onMouseLeave(){
    this.isHovered = false
  }

  edit(id: number) {
    this._router.navigateByUrl(`/edit-todo/${id}`)
  }

  delete(id: number) {
    this._todoService.deleteTodo(id);
    this.onTodosChange()
  }

  onTodosChange() {
    this.todosChange.emit(this._todoService.getTodos())
  }
}