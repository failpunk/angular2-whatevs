import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';

import { Post } from './post.service';

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

@Injectable()
export class PostService {
    constructor(private _http: Http) { }

    getPosts() {
        return this._http.get('http://jsonplaceholder.typicode.com/posts')
            .map((response) => response.json());
    }

    getPost(id: number) {
        return this._http.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
            .map((response) => response.json());
    }
}