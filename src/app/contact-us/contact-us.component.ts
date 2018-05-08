import { Component } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  title = 'Sample';
  form = {
    firstName : null,
    lastName : null,
    gender : "Male",
    dob : new Date(),
    email : null,
    mobileNumber : null

  }

  submitForm(data){
    console.log(data);
    for(var item in data){
      if(data[item]==null){
        alert("All the fields are mandatory.");
      }
    }
  }
  
}
