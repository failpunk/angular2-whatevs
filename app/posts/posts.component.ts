import { Component } from 'angular2/core';

import { PostListComponent } from './post.list.component';

@Component({
    selector: 'app-posts',
    directives: [PostListComponent],
    template: `
    <h1 class="topic-header">Posts</h1>
    <h3 class="topic-subheader">Playing around with Angular2</h3>

    <post-list></post-list>
    `,
})

export class AppPostsComponent {
}
