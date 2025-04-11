import { WritableSignal } from "@angular/core";
export interface Task {
  id: number;
  name: string;
  completed: WritableSignal<boolean>;
}
