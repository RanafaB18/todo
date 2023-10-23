import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { todo } from 'src/interfaces';
import { TodoServiceService } from 'src/todo-service.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css'],
})
export class CreateTodoComponent implements OnInit {
  todo !: todo
  @ViewChild('myForm') form!: NgForm;
  constructor(
    private _todoService: TodoServiceService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const id = this._activatedRoute.snapshot.paramMap.get('id') || "";
    const todo = this._todoService.getTodoWithId(id);
    if (!todo) {
      this.todo = { whatToDo: '', id: "", completed: false};
    } else {
      this.todo = todo
    }
  }
  createTodo() {
    if (!this.todo.whatToDo) return;
    if (this.todo.id === "") {
      this._todoService.setTodo({
        whatToDo: this.todo.whatToDo,
        id: this._todoService.getID(),
        completed: false
      });
    } else {
      this._todoService.updateTodoWithId({...this.todo, completed: false})
    }
    this._router.navigateByUrl('/todo-list');
  }
}
