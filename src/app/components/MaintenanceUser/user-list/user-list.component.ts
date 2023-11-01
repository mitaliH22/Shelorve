import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
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
