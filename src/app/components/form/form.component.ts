import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit 	 {
  todos = <any>[];

  item ={
    id:'',
    title: '',
    description: '',
    state:false
  }

  ngOnInit(){
    if(localStorage.getItem('todo')){
      this.todos = localStorage.getItem('todo');
      this.todos = JSON.parse(this.todos);
    }
  }

  uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0,
        v = c == 'x' ? r : c;
        return v.toString(16);
    });
}


   addItem(){
    this.item.id = this.uuid()

    this.todos.push(this.item);

    localStorage.setItem("todo", JSON.stringify(this.todos))

    this.item = {
      id:'',
      title: '',
      description: '',
      state:false
    }

  }
}
