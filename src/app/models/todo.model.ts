// Basic todo item interface
export interface IToDoItem {
  title: string;
  completed: boolean;
}

// Comprehensive todo interface with more details
export interface Todo {
  id: number;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  createdDate: Date;
}

// Extended todo interface with priority
export interface TodoWithPriority extends Todo {
  priority: 'low' | 'medium' | 'high';
}