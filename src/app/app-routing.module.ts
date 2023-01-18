import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TodoTrashComponent } from './pages/todo-trash/todo-trash.component';
import { AddTodoComponent } from './pages/add-todo/add-todo.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    redirectTo: '',
  },
  {
    path: 'list',
    component: TodoListComponent
  },
  {
    path: 'add-todo',
    component: AddTodoComponent
  },
  {
    path: 'trash',
    component: TodoTrashComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
