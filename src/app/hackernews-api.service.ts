import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HackerNewsAPIService {
	officialUrl: string;
	subUrl: string;

  constructor(private http: Http) {
  	this.officialUrl = 'https://hacker-news.firebaseio.com/v0';
  	this.subUrl = 'https://node-hnapi.herokuapp.com';
  }

	fetchStories(storyType: string): Observable<any> {
		return this.http.get(`${this.officialUrl}/${storyType}.json`)
	                	.map(response => response.json());
	}

	fetchItem(id: number): Observable<any> {
		return this.http.get(`${this.officialUrl}/item/${id}.json`)
	                	.map(response => response.json());
	}

	fetchComments(id: number): Observable<any> {
		return this.http.get(`${this.subUrl}/item/${id}`)
	                	.map(response => response.json());
	}

	fetchUser(id: string): Observable<any> {
  		return this.http.get(`${this.subUrl}/user/${id}`)
  					.map(response => response.json());
 	}
}