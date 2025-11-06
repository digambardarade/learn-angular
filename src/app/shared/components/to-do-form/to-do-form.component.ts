import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IToDoItem } from '../../../models/todo.model';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.scss']
})
export class ToDoFormComponent implements OnInit {

  todoItems: IToDoItem[] = [
    { title: 'Buy groceries', completed: false },
    { title: 'Walk the dog', completed: true },
    { title: 'Read a book', completed: false }
  ];

  @ViewChild ('todoTitleInput') todoTitleInput !: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  onTodoAdd(): void {
    // Logic to add a new todo item
    const newTitle = this.todoTitleInput.nativeElement.value;
    if (newTitle.trim()) {
      this.todoItems.push({ title: newTitle, completed: false });
      this.todoTitleInput.nativeElement.value = '';
    }
  }

}
