import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  title = 'Sample';
  menuList = [
  	{
  		name : "Home",
  		url : "/",
  		id : 0,
  		isActive : "active"
  	},
  	{
  		name : "Product",
  		url : "/product",
  		id : 1,
  		isActive : "inactive"
  	},
  	{
  		name : "Contact Us",
  		url : "/contact-us",
  		id : 2,
  		isActive : "inactive"
  	},
  	{
  		name : "Careers",
  		url : "/careers",
  		id : 3,
  		isActive : "inactive"
  	}
  ];

  selectedMenu(id){
  	let index = this.menuList.findIndex(function(menu){return menu.id==id});
  	this.menuList.map(function(menu){return menu.isActive="inactive"});
  	this.menuList[index].isActive = "active";
  }

}
