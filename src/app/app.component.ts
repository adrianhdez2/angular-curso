import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { NTodo } from './models/todo.model';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ApiService } from './services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodoComponent,
    CommonModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  todos: NTodo.TodoResponse = { totalRecords: 0, data: [] };

  constructor(private readonly apiService: ApiService) { }

  ngOnInit(): void {
    // this.apiService.get<NTodo.TodoResponse>().subscribe(val => this.todos = val);
    this.getTodos();
  }

  getTodos() {
    this.apiService.get<NTodo.TodoResponse>().subscribe(val => this.todos = val);
  }

  getTodoInfo(val: NTodo.TodoData) {
    console.log(val);
  }

  updateTodo(item: NTodo.TodoData) {
    // this.apiService.put(item, item.id).subscribe(console.log)
    this.apiService.patch({ description: item.description }, item.id).subscribe(console.log)
  }

  deleteTodo(item: NTodo.TodoData) {
    this.apiService.delete<NTodo.TodoResponse>(item.id).subscribe(() => this.getTodos())
  }

  addTodo() {
    this.apiService.post({
      "title": "Leer documentación técnica",
      "description": "Investigar y leer la documentación de una nueva tecnología o herramienta relevante para el proyecto.",
      "status": "Por hacer",
      "priority": 3,
      "hidden": false,
      "id": 1,
      "deadLine": "2024-04-07T03:25:54.898Z",
      "color": {
        "status": "#ed4040",
        "priority": "#68db68"
      },
      "class": {
        "status": "to-do",
        "priority": "low"
      },
      "progress": 0.2
    }).subscribe(() => this.getTodos())
  }
}
