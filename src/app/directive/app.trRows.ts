import { Directive, ElementRef , HostListener, Input} from '@angular/core';
import { ConfigService } from './../services/app.service';

@Directive({
  selector: '[tr-row]',
})
export class trRow {
    @Input() product: any;
  //constructor(public viewContainerRef: ViewContainerRef) { }
  	element = "";
  	constructor(private el: ElementRef, private configService:ConfigService) {
  		console.log("Element===>",el);
    }
    

    @HostListener('click') onMouseClick() {
        console.log("Clicked====>",this.product);
        let reqData = {
            _id : this.product._id,
            isAvailable : !this.product.isAvailable
        }
        this.configService.patchData("http://localhost:3030/product", reqData)
          .subscribe((data:any) =>{
            console.log("data==>",data);
            ///this.getProducts();
            //let msg = data && data.message? data.message
            alert(data.message);
            
        });
    }

}