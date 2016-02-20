import { Component } from 'angular2/core';

@Component({
    selector: 'post-detail',
    inputs: ['post'],
    template: `
    <div>
        <h3 class="post-title">{{post.title}}</h3>
        <p class="post-body">{{post.body}}</p>
    </div>
    `,
})

export class PostDetailComponent {
}
