import { Component, OnInit } from 'angular2/core';

import { PostDetailComponent } from './post.detail.component';
import { Post, PostService } from '../services/post.service';

@Component({
    selector: 'post-list',
    directives: [PostDetailComponent],
    providers: [PostService],
    template: `
    <div>
        <post-detail *ngFor="#post of posts" [post]="post"></post-detail>
    </div>
    `,
})

export class PostListComponent implements OnInit {

    posts: Post[];

    constructor(private PostService: PostService) {

    }

    ngOnInit() {
        this.PostService.getPosts().subscribe(posts => this.posts = posts);
    }
}
