import { Directive, TemplateRef, ViewContainerRef, input, effect, Signal, inject } from '@angular/core';
import { Task } from '../models/task.model';

@Directive({
  selector: '[appEmptyState]'
})
export class EmptyStateDirective {


    private template = inject(TemplateRef<any>);
    private ViewContainer = inject(ViewContainerRef);

    readonly whenEmpty = input.required<Signal<Task[]>>();

    constructor() {
      effect(()=> {
        const tasks = this.whenEmpty();
        const isEmpty = tasks.length === 0 ;

        this.ViewContainer.clear();
        if (isEmpty) {
          this.ViewContainer.createEmbeddedView(this.template);
        }
      });
    }
  }


