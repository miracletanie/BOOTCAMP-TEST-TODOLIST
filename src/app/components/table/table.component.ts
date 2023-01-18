import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent   {
  @Input() todos = <any>[];
  @Input() liste = true

  trashList = <any>[];
  todoList = <any>[];


  complete(todo: any){

    todo.state = true

    if(this.todos.indexOf(todo) > -1){
      this.todos.splice(this.todos.indexOf(todo), 1,todo)
    }
  }

  removeTodo(todo: any){

    if(this.todos.indexOf(todo) > -1){
      this.todos.splice(this.todos.indexOf(todo), 1)
      localStorage.setItem("todo", JSON.stringify(this.todos))

      if (localStorage.getItem('trash')){

        this.trashList = localStorage.getItem('trash')
        this.trashList = JSON.parse(this.trashList)

        this.trashList.push(todo);
        localStorage.setItem('trash',JSON.stringify(this.trashList));
      }else{

        this.trashList.push(todo);
        localStorage.setItem('trash',JSON.stringify(this.trashList));
      }

    }
  }

  restaurer(todo:any) {


      this.trashList.splice(this.trashList.indexOf(todo), 1)
      localStorage.setItem("trash", JSON.stringify(this.trashList))
      this.todos = this.trashList
      todo.state = false;

      this.todoList = localStorage.getItem('todo')
        this.todoList = JSON.parse(this.todoList)

        this.todoList.push(todo);
        localStorage.setItem('todo',JSON.stringify(this.todoList));

  }
}
