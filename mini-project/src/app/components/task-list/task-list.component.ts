import { Component,computed, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { StrikeThroughDirective } from '../../directives/strike-through.directive';



@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, StrikeThroughDirective],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  public taskService = inject(TaskService);

  tasks = this.taskService.getTask();
}
