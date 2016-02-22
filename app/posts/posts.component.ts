import { Component } from 'angular2/core';
import { RouterLink } from "angular2/router";

import { PostListComponent } from './post.list.component';

@Component({
    selector: 'app-posts',
    directives: [PostListComponent, RouterLink],
    template: `
    <h1 class="topic-header">Posts</h1>
    <h3 class="topic-subheader">Playing around with Angular2</h3>

    <a
        class="pure-button pure-button-primary"
        [routerLink]="['/NewPost']">Add New Post</a>

    <post-list></post-list>
    `,
})

export class AppPostsComponent {
}
