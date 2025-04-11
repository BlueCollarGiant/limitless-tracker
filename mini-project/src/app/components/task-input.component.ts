import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';
@Component({
  selector: 'app-task-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-input.component.html',
  styleUrl: './task-input.component.css'
})
export class TaskInputComponent {
  taskName: string = '';
  private taskService = inject(TaskService);

  onSubmit() {
    if (!this.taskName.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      name: this.taskName.trim(),
      completed: signal(false),
    };

    this.taskService.addTask(newTask);
    this.taskName = ''
  }
}
