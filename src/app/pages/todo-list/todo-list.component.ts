import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit  {

  todos = <any>[]

  type = true

  ngOnInit() {
    this.todos = localStorage.getItem('todo');
    this.todos = JSON.parse(this.todos);
  }


}
