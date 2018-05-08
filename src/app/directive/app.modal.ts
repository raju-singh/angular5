import { Directive, ElementRef , HostListener, Input} from '@angular/core';

@Directive({
  selector: '[cs-modal]',
})
export class modalDirective {
  //constructor(public viewContainerRef: ViewContainerRef) { }
  	element = "";
  	constructor(private el: ElementRef) {
  		//console.log("Element===>",el);
       	//el.nativeElement.style.display = 'block';
       	//el.nativeElement.innerText = "green";
    }

}