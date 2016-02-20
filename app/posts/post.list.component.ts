import { Component, OnInit } from 'angular2/core';

import { PostDetailComponent } from './post.detail.component';

@Component({
    selector: 'post-list',
    directives: [PostDetailComponent],
    template: `
    <div>
        <post-detail *ngFor="#post of posts" [post]="post"></post-detail>
    </div>
    `,
})

export class PostListComponent implements OnInit {

    public posts:Array;

    constructor() {

    }

    ngOnInit() {
        this.posts = [
            {
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            },
            {
                "userId": 1,
                "id": 2,
                "title": "qui est esse",
                "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            },
        ];
    }
}
