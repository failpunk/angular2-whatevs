import { Component } from 'angular2/core';

import { UserListComponent } from './user.list.component';

@Component({
    selector: 'app-users',
    directives: [UserListComponent],
    template: `
    <h1 class="topic-header">Users</h1>
    <h3 class="topic-subheader">Playing around with Angular2</h3>

    <user-list></user-list>
    `,
})

export class AppUsersComponent {
}
