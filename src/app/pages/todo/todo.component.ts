import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, ContentChildren, DoCheck, ElementRef, EventEmitter, Input, LOCALE_ID, OnChanges, OnDestroy, OnInit, Output, QueryList, SimpleChanges, ViewChild } from '@angular/core';
import { NTodo } from '../../models/todo.model';
import { CommonModule, registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { InputComponent } from '../../components/input/input.component';
registerLocaleData(es)

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es'
    }
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log("constructor");

  }

  // Escucha cambios que suceden en decorador @Input()

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");

  }

  //Hacer operaciones que no se pudieron hacer en el constructor
  //Hacer operaciones básicas, inyectar dependencias...

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  // Escucha todos los cambios que suceden en la aplicación
  ngDoCheck(): void {
    console.log("ngDoCheck");

  }

  // Se ejecuta cuando se ha leido/verificado por primera vez el contenido proyectado
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");

  }

  // Se ejecuta cada que haya un cambio en la aplicación
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");

  }

  // Se tiene acceso al template
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");

  }

  // Se ejecuta cuando haya cambios en la aplicación
  // Se usa solo para cambios especificos en la plantilla o contenido
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");

  }

  // Se ejecuta cuando se elimia el componente
  ngOnDestroy(): void {
    console.log("ngOnDestroy");

  }

  @Input({ required: true }) todoData!: NTodo.TodoData;
  @Output() onClickIcon = new EventEmitter<NTodo.TodoData>();
  @ContentChildren(InputComponent, { read: ElementRef }) projectedContent?: QueryList<ElementRef>;

  get priority(): string {
    switch (this.todoData.priority) {
      case NTodo.Priority.LOW:
        return NTodo.PriorityText.LOW;
      case NTodo.Priority.MEDIUM:
        return NTodo.PriorityText.MEDIUM;

      default:
        return NTodo.PriorityText.HIGH;
    }
  }

  get progress() {
    return this.todoData.progress * 100;
  }

  get range() {
    if (this.progress >= 0 && this.progress <= NTodo.Range.LOW) {
      return NTodo.RangeText.LOW;
    } else if (this.progress > NTodo.Range.LOW && this.progress <= NTodo.Range.MEDIUM) {
      return NTodo.RangeText.MEDIUM;
    }

    return NTodo.RangeText.HIGH;
  }

  selectContent() {
    const elements = this.projectedContent?.map(item => item)
    console.log(elements);

  }
}
