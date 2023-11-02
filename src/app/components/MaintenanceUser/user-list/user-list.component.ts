import { Component } from '@angular/core';
import { OperationsService } from 'src/app/services/operations.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  constructor(private operation: OperationsService) {}

  ngOnInit() {
    this.operation.getOperation('/users').subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  
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
