import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'dateFormat'})
export class dateFormat implements PipeTransform {
  transform(value: string) {
  	//console.log("Value===>",new Date(value));
  	var monthNames = [
	    "January", "February", "March",
	    "April", "May", "June", "July",
	    "August", "September", "October",
	    "November", "December"
	];
	let date = new Date(value);
	var day = date.getDate();
	var monthIndex = date.getMonth();
	var year = date.getFullYear();

	return year+" "+monthNames[monthIndex]+ " "+day;

  }
}

@Pipe({name: 'categoryPipe'})
export class categoryPipe implements PipeTransform {
  transform(value: number, category: any) {
	return category[value].value;

  }
}