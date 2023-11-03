import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  @Input() userList: any;
  
  users = [
    {
      name: 'Daniel Dsouza',
      email: 'daniel.s@nomail.com',
      role: 'Admin',
      department: 'Department',
      password: '#12345',
    },
  ];
}
