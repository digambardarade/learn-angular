import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  // Properties for editing functionality
  isEditing: boolean = false;
  editingItem: IToDoItem | null = null;
  editingIndex: number = -1;

  @ViewChild ('todoTitleInput') todoTitleInput !: ElementRef;
  
  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onTodoAdd(): void {
    // Logic to add a new todo item
    const newTitle = this.todoTitleInput.nativeElement.value;
    if (newTitle.trim()) {
      this.todoItems.push({ title: newTitle.trim(), completed: false });
      this.todoTitleInput.nativeElement.value = '';
      
      // Show success notification
      this.snackBar.open('✅ Todo added successfully!', 'Close', {
        duration: 3000,
        panelClass: ['success-snackbar']
      });
     }
  }

  onUpdateTodo(): void {
    // Logic to update the existing todo item
    const updatedTitle = this.todoTitleInput.nativeElement.value;
    if (updatedTitle.trim() && this.editingItem && this.editingIndex > -1) {
      const oldTitle = this.todoItems[this.editingIndex].title;
      this.todoItems[this.editingIndex].title = updatedTitle.trim();
           
      this.cancelEdit();      
    }
  }

  cancelEdit(): void {
    // Reset editing state
    this.isEditing = false;
    this.editingItem = null;
    this.editingIndex = -1;
    this.todoTitleInput.nativeElement.value = '';
  }
  onEditTodo(item: IToDoItem): void {
    // Put the todo item in the input box for editing
    this.isEditing = true;
    this.editingItem = item;
    this.editingIndex = this.todoItems.findIndex(todo => todo === item);
    this.todoTitleInput.nativeElement.value = item.title;
    this.todoTitleInput.nativeElement.focus(); // Focus on the input
    
  }

  onRemoveTodo(item: IToDoItem): void {
    // Logic to remove the selected todo item from array
    const index = this.todoItems.findIndex(todo => todo.title === item.title && todo.completed === item.completed);
    if (index > -1) {
      const removedTitle = item.title;
      this.todoItems.splice(index, 1);
      
         
      // If we're editing the item being removed, cancel edit
      if (this.editingItem === item) {
        this.cancelEdit();
      }
    }
  }
}
