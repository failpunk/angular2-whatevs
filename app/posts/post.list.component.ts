import { Component, OnInit } from 'angular2/core';

import { PostListDetailComponent } from './post.list.detail.component';
import { Post, PostService } from '../services/post.service';

@Component({
    selector: 'post-list',
    directives: [PostListDetailComponent],
    providers: [PostService],
    template: `
    <div>
        <post-list-detail *ngFor="#post of posts" [post]="post"></post-list-detail>
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
