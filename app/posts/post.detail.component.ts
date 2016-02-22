import { Component, OnInit } from 'angular2/core';
import {RouteParams} from "angular2/router";

import { Post, PostService } from '../services/post.service';

@Component({
    selector: 'post-detail',
    providers: [PostService],
    template: `
    <div>
        <h1 class="topic-header">Post {{id}}</h1>
        <h3 class="topic-subheader">Playing around with Angular2</h3>

        <div class="post-details" *ngIf="post">
            <h3 class="post-title">{{post.title}}</h3>
            <p class="post-body">{{post.body}}</p>
        </div>
    </div>
    `,
})

export class PostDetailComponent implements OnInit {
    id: string;
    post: Post;

    constructor(private routeParams: RouteParams, private PostService: PostService) {
        this.id = routeParams.get("id");
    }

    ngOnInit() {
        this.PostService.getPost(this.id).subscribe(post => this.post = post);
    }
}
