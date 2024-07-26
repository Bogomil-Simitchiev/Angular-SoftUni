import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() highlightColor: string = 'yellow';
  color: string = 'dark';
  @Output() colorChange: EventEmitter<string> = new EventEmitter();
  
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter', ['$event']) onMouseEnter() {
    this.highlight(this.highlightColor);
    this.colorChange.emit(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('red');
    this.colorChange.emit('red');

  }

  private highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
