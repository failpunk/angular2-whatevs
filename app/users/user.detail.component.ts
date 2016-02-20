import { Component } from 'angular2/core';

@Component({
    selector: 'user-detail',
    inputs: ['user'],
    template: `
    <div>
        <h3 class="user-title">{{user.name}} ({{user.username}})</h3>
        <p class="user-email">{{user.email}}</p>
        <p class="user-body"></p>
    </div>
    `,
})

export class UserDetailComponent {
}
