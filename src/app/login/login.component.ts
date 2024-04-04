import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
