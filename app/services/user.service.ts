import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';

import { User } from './User.service';

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

@Injectable()
export class UserService {
    constructor(private _http: Http) { }

    getUsers() {
        return this._http.get('http://jsonplaceholder.typicode.com/users')
            .map((response) => response.json());
    }

    //getCharacter(id: number) {
    //    return this._http.get('characters.json')
    //        .map((response) => response.json().filter((c: Character) => c.id === id)[0]);
    //}
}