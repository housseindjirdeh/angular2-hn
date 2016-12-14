import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

declare var fetch;

//wrap fetch in observable so we can keep it chill
export function lazyFetch(url, options?){
  return new Observable(fetchObserver => {
    let cancelToken = false;
    fetch(url, options)
      .then(res => {
        if(!cancelToken){
          return res.json()
            .then(data => {
              fetchObserver.next(data);
              fetchObserver.complete()
            })
        }
      }).catch(err => fetchObserver.error(err));
      return () => {
        cancelToken = true;
      }
  });
}



@Injectable()
export class HackerNewsAPIService {
	baseUrl: string;

  constructor() {
  	this.baseUrl = 'https://node-hnapi.herokuapp.com';
  }

	fetchStories(storyType: string, page: number): Observable<any> {
		return lazyFetch(`${this.baseUrl}/${storyType}?page=${page}`);
	}

	fetchItemContent(id: number): Observable<any> {
		return lazyFetch(`${this.baseUrl}/item/${id}`);
	}

	fetchUser(id: string): Observable<any> {
  		return lazyFetch(`${this.baseUrl}/user/${id}`);
 	}
}
