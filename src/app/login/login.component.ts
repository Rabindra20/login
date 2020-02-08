import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
interface status {
  status : string
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private user: UserService) { }

  ngOnInit() {
  }
  login(user,pass){
    var uname = user.value;
    var passwd = pass.value;
    this.user.login(uname,passwd).subscribe((data: status) => {
      if(data.status == "success")
      alert("login Successful");
      else
      alert("invalid user/pass");
    });
  }

}
