import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';

import { AppPostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './posts/post.detail.component';
import { NewPostComponent } from './posts/post.new.component';
import { AppUsersComponent } from './users/users.component';

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS],
    template: `
    <div class="pure-menu pure-menu-horizontal">
        <ul class="pure-menu-list">
            <li class="pure-menu-item">
                <a [routerLink]="['Posts']" class="pure-menu-link">Posts</a>
            </li>
            <li class="pure-menu-item">
                <a [routerLink]="['Users']" class="pure-menu-link">Users</a>
            </li>
        </ul>
    </div>

    <router-outlet></router-outlet>
    `,
})
@RouteConfig([
    {path: '/posts', as: 'Posts', component: AppPostsComponent, useAsDefault: true},
    {path: '/posts/:id', name: 'PostDetail', component: PostDetailComponent},
    {path: '/posts/new', name: 'NewPost', component: NewPostComponent},
    {path: '/users', as: 'Users', component: AppUsersComponent}
])

export class AppComponent {
}
