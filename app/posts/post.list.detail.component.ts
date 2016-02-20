import { Component } from 'angular2/core';
import { RouterLink } from "angular2/router";

@Component({
    selector: 'post-list-detail',
    inputs: ['post'],
    directives: [RouterLink],
    template: `
    <div>
        <a [routerLink]="['/PostDetail', {id: post.id}]">
            <h3 class="post-title">{{post.title}}</h3>
        </a>

        <p class="post-body">{{post.body}}</p>
    </div>
    `,
})

export class PostListDetailComponent {

}
