import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appHighlighted]',
  standalone: true
})
export class HighlightedDirective {
  @Input() appHighlighted = false;
  @Output() onToggleHighlighted = new EventEmitter<boolean>();

  constructor() { }

  @HostBinding('class.red-shadow')
  get cssClass() {
    return this.appHighlighted;
  }

  @HostBinding('style.borderLeft')
  get cssStyle() {
    return '2px solid red'
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.appHighlighted = true;
    this.onToggleHighlighted.emit(this.appHighlighted);

  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.appHighlighted = false;
    this.onToggleHighlighted.emit(this.appHighlighted);

  }

  onToggle() {
    this.appHighlighted = !this.appHighlighted;
    this.onToggleHighlighted.emit(this.appHighlighted);

  }

}