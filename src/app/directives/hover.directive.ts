import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {
  //variables
  @Input() color:string='blue';

  constructor(private element:ElementRef, @Inject(DOCUMENT) private document:Document, private renderer:Renderer2) {
    console.log(element.nativeElement)
   }

  ngOnInit(): void {
    // this.element.nativeElement.style.background= this.color;
    // let tag = this.document.getElementsByTagName('input')
    // tag[0].className= "col-3"
    // tag[1].className= "col-3"
    this.renderer.setStyle(this.element.nativeElement, 'background',this.color);
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(this.element.nativeElement, 'background','green');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.setStyle(this.element.nativeElement, 'background','yellow');
  }

}
