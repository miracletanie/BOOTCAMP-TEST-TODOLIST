import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {


  trashList = <any>[];
  todoList = <any>[];
  todos = 0
  trash =0

  ngOnInit(){
    this.trashList = localStorage.getItem('trash')
    this.trashList = JSON.parse(this.trashList)
    this.trash = this.trashList.length

    this.todoList = localStorage.getItem('todo')
    this.todoList = JSON.parse(this.todoList)
    this.todos = this.todoList.length


  }
}
