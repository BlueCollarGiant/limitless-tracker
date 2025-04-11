import { Injectable,signal } from '@angular/core';
import { Task } from '../models/task.model';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks = signal<Task[]>([])

  getTask() {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.update(tasks => [...tasks, task]);
  }
  toggleTaskCompletion(task: Task): void {
    task.completed.update(value => !value);
  }
}
