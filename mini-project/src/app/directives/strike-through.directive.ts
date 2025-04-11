import { Directive, ElementRef,  effect, inject, input} from '@angular/core';


@Directive({
  selector: '[appStrikeThrough]',
  standalone: true,
})
export class StrikeThroughDirective {

  private el = inject(ElementRef);
  readonly completed = input.required<boolean>();
  constructor() {
    effect(() => {
      const isDone = this.completed();

      this.el.nativeElement.style.textDecoration = isDone
      ? "Line-through"
      : "none";
    });
  }

}
