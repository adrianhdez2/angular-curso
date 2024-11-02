import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { TODO_DATA } from '../assets/todo';
import { NTodo } from './models/todo.model';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoComponent, CommonModule, InputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  todoData = TODO_DATA[0];
  // todoData = TODO_DATA.filter(item => item.id < 2);
  // todoData: NTodo.TodoData[] = []

  // @ViewChild('todoRef', { read: ElementRef }) todo?: ElementRef;
  @ViewChildren(TodoComponent, { read: ElementRef }) todo?: QueryList<ElementRef>;


  constructor() { }

  getTodoInfo(val: NTodo.TodoData) {
    console.log(val);

  }

  trackByFn(_index: number, item: NTodo.TodoData) {
    return item.id;
  }

  orderData() {
    // this.todoData.sort((a, b) => a.priority - b.priority)
  }

  change() {
    // this.todo?.changes.subscribe(values => {
    //   console.log(values);
    // })


    this.todoData = { ...this.todoData, description: 'Descripcion para ver si funciona ngOnChanges.' }
  }

  addTodo() {
    // this.todoData = TODO_DATA.filter(item => item.id < 5)
  }
}
