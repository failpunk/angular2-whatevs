import { Component, OnInit } from 'angular2/core';

import { UserDetailComponent } from './user.detail.component';
import { User, UserService } from '../services/user.service';

@Component({
    selector: 'user-list',
    directives: [UserDetailComponent],
    providers: [UserService],
    template: `
    <div>
        <user-detail *ngFor="#user of users" [user]="user"></user-detail>
    </div>
    `,
})

export class UserListComponent implements OnInit {

    users: User[];

    constructor(private UserService: UserService) {

    }

    ngOnInit() {
        this.UserService.getUsers().subscribe(users => this.users = users);
    }
}
