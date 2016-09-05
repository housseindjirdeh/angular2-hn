import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export interface ItemID {
  id: number;
}

@Injectable()
export class HackerNewsAPIService {
	baseUrl: string;

  constructor(private http: Http) {
  	this.baseUrl = 'https://hacker-news.firebaseio.com/v0';
  }

	fetchStories(): Observable<ItemID[]> {
		return this.http.get(`${this.baseUrl}/topstories.json`)
                    .map(response => response.json());
	}
}