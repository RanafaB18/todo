import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { todo } from 'src/interfaces';
import { TodoServiceService } from 'src/todo-service.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
} from '@angular/animations';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  animations: [
    trigger('items', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }), // initial
        animate(
          '1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({ transform: 'scale(1)', opacity: 1 })
        ), // final
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)', opacity: 1, height: '*' }),
        animate(
          '1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({
            transform: 'scale(0.5)',
            opacity: 0,
            height: '0px',
            margin: '0px',
          })
        )
      ]),
    ]),
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':enter', [
          style({ opacity: 0 }),
          stagger(130, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ],
})
export class TodoListComponent implements OnInit {
  todoItems!: Array<todo>;
  constructor(private _todoService: TodoServiceService) {}

  ngOnInit(): void {
    this.todoItems = this._todoService.getTodos();
  }

  refreshData(todos: todo[]) {
    this.todoItems = todos;
  }

  trackByFn(index: number, todo: todo) {
    return todo.id;
  }
}
