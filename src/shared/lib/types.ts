export enum Priority {
  LOW = 'low', // Низкий
  MEDIUM = 'medium', // Средний
  HIGH = 'high', // Высокий
}

export enum Status {
  TODO = 'todo', // Сделать
  PROGRESS = 'progress', // В прогрессе
  DONE = 'done', // Сделано
}

export interface Task {
  id: string;
  title: string;
  priority: Priority;
  status: Status;
  progress: number;
}