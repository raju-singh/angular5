import { Component } from '@angular/core';
import { ConfigService } from './../services/app.service';


@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers : [ConfigService]
})
export class HomeComponent {
  constructor(private configService:ConfigService) {

  }

  loginFlag = true;
  isLoggedIn = false;
  login = {
  	userName : null,
    email : null,
  	password : null
  }
  signup = {
    userName : null,
    email : null,
    password : null
  }

  submitLogin(data){
  	console.log("Request Object===>>",data);
    this.configService.postData("http://localhost:3030/login", data)
      .subscribe((data:any) =>{ 
        console.log("data==>",data);
        if(data.statusCode===200){
          localStorage.set('token', data.userToken);
        }else{
          alert(data.message)
        }
    });
  }

  submitSignUp(data){
  	console.log("Request Object===>>",data);
    this.configService.postData("http://localhost:3030/register", data)
      .subscribe((data:any) =>{ 
        console.log("data==>",data);
        if(data.statusCode===200){
          localStorage.set('token', data.userToken);
        }else{
          alert(data.message)
        }
    });
  }
  setFlag(flag){
    this.loginFlag = !flag;
  }

  checkUserExist(data){
    this.configService.postData("http://localhost:3030/username-check", {username : data})
      .subscribe((data:any) => {
        console.log("data==>",data);
        if(data.userExist){
          alert(data.message)
        }
      });
  }
}
