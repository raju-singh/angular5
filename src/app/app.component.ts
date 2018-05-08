import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sample';
  isLoggedIn = false;
  login = {
  	email : null,
  	password : null
  }

  submitLogin(data){
  	console.log("Request Object===>>",data);
  }

  submitSignUp(data){
  	console.log("Request Object===>>",data);
  }
}
