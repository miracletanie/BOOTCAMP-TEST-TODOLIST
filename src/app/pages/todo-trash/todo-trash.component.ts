import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-trash',
  templateUrl: './todo-trash.component.html',
  styleUrls: ['./todo-trash.component.css']
})
export class TodoTrashComponent implements OnInit  {

  todos = <any>[]

  type = false

  ngOnInit() {
    this.todos = localStorage.getItem('trash');
    this.todos = JSON.parse(this.todos);
  }

}
