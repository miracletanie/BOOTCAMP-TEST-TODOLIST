import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { CorbeilleComponent } from './components/corbeille/corbeille.component';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { AddTodoComponent } from './pages/add-todo/add-todo.component';
import { TodoTrashComponent } from './pages/todo-trash/todo-trash.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent,
    CorbeilleComponent,
    TodoListComponent,
    AddTodoComponent,
    TodoTrashComponent,
    HomeComponent,
    NotFoundComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
