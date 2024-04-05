import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userList: any [] = []; 
  constructor(private userServiced: UserService) { 
    this.getUsers();
  }

  ngOnInit() {
  }

  getUsers(){
    this.userServiced.getUsers().subscribe((res: any) => {
      this.userList = res.data;
    });
  }

}
