import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HackerNewsAPIService {
	baseUrl: string;

  constructor(private http: Http) {
  	this.baseUrl = 'https://hacker-news.firebaseio.com/v0';
  }

	fetchStories(): Observable<any> {
		return this.http.get(`${this.baseUrl}/topstories.json`)
                    .map(response => response.json());
	}

	fetchItem(id: number): Observable<any> {
		return this.http.get(`${this.baseUrl}/item/${id}.json`)
                    .map(response => response.json());
	}
}