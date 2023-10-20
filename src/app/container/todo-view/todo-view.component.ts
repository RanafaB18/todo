import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent {
  todayDate = new Date().toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'long',
    weekday: 'long',
  })


}
