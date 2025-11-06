import { Component, OnInit } from '@angular/core';
import { Todo } from '../../../models/todo.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  
  todos: Todo[] = [
    {
      id: 1,
      title: 'Learn Angular Components',
      description: 'Study Angular component architecture and lifecycle hooks',
      status: 'completed',
      createdDate: new Date('2025-11-01')
    },
    {
      id: 2,
      title: 'Implement Todo List',
      description: 'Create a functional todo list with CRUD operations',
      status: 'in-progress',
      createdDate: new Date('2025-11-03')
    },
    {
      id: 3,
      title: 'Add Routing',
      description: 'Set up Angular routing for navigation between components',
      status: 'pending',
      createdDate: new Date('2025-11-04')
    },
    {
      id: 4,
      title: 'Style with SCSS',
      description: 'Apply modern styling and responsive design to the application',
      status: 'pending',
      createdDate: new Date('2025-11-05')
    },
    {
      id: 5,
      title: 'Add Form Validation',
      description: 'Implement reactive forms with proper validation rules',
      status: 'pending',
      createdDate: new Date('2025-11-06')
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'completed':
        return '#4CAF50';
      case 'in-progress':
        return '#FF9800';
      case 'pending':
        return '#F44336';
      default:
        return '#757575';
    }
  }

  getStatusCount(status: string): number {
    return this.todos.filter(todo => todo.status === status).length;
  }

}
