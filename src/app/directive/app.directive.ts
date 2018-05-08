import { Directive, ElementRef , HostListener, Input} from '@angular/core';

@Directive({
  selector: '[ad-host]',
})
export class AppDirective {
  //constructor(public viewContainerRef: ViewContainerRef) { }
  	element = "";
  	constructor(private el: ElementRef) {
  		console.log("Element===>",el);
       	el.nativeElement.style.backgroundColor = 'grey';
       	//el.nativeElement.innerText = "green";
    }
    @HostListener('mouseenter') onMouseEnter() {
	  	this.highlight('white');
	}

	@HostListener('mouseleave') onMouseLeave() {
	  	this.highlight('grey');
	}

	highlight(color: string) {
	  	this.el.nativeElement.style.backgroundColor = color;
	}
}