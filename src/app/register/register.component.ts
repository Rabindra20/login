import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
interface status {
  status : string
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 isLogin;
  constructor(private user: RegisterService) { }

  ngOnInit() {
  }
  
  register(user,Fname,Contact,pass){
    var uname = user.value;
    var Fname = Fname.value;
    var Contact = Contact.value;
    var passwd = pass.value;
    this.user.register(uname,Fname,Contact,passwd).subscribe((data: status) => {
      if(data.status == "success")
      alert("register Successful");
     
    });
  }

}