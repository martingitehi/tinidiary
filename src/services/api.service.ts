import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable()

export class API {
    private http: HttpClient;
    constructor() {

    }

    getPosts() {
        let headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

        return this.http.get('https://public-api.wordpress.com/rest/v1.1/sites/kushandcakes.wordpress.com/posts/?number=5', { headers: headers });
    }
}