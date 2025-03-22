import {
  Component,
  effect,
  EventEmitter,
  inject,
  input,
  Output,
} from '@angular/core';
import { Task, TaskService } from '../../data-access/task.service';
import { RouterLink } from '@angular/router';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './table.component.html',
})
export class TableComponent {
  @Output() taskDeleted = new EventEmitter<void>();
  tasks = input.required<Task[]>();
  taskService = inject(TaskService);
  private _taskService = inject(TaskService);

  async deleteTask(id: string, name: string) {
    toast(`Are you sure you want to delete "${name}" task?`, {
      description: 'This action cannot be undone.',
      action: {
        label: 'Yes, delete',
        onClick: async () => {
          try {
            await this._taskService.delete(id);
            this.taskDeleted.emit();
            toast.success('Task deleted');
          } catch (error) {
            toast.error('An error occurred: ' + error);
          } finally {
          }
        },
      },
      cancel: {
        label: 'Cancel',
        onClick: () => toast.info('Deletion cancelled'),
      },
    });
  }
}
