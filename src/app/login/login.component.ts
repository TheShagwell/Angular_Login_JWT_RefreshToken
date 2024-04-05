import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // The payload from the API
  loginObj: any = {
    "EmailId": "",
    "Password": "",
  }

  router = inject(Router)
  constructor(private userServiced: UserService) { }

  ngOnInit() {
  }

  login(){
    debugger;
    this.userServiced.onLogin(this.loginObj).subscribe((res: any) => {
    debugger;
      if(res.result){
        localStorage.setItem('userData', JSON.stringify(res.data));
        this.router.navigateByUrl('/dashboard');
      } else{
        alert(res.message);
      }
    }, error => {
      alert("Wrong credentials");
    })
  }

}
