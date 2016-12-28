import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'isomorphic-fetch';
import 'rxjs/add/operator/map';

import { Story } from './story';
import { User } from './user';
import { PollResult } from './poll-result';

declare var fetch;

// wrap fetch in observable so we can keep it chill
function lazyFetch(url, options?) {
  return new Observable(fetchObserver => {
    let cancelToken = false;
    fetch(url, options)
      .then(res => {
        if (!cancelToken) {
          return res.json()
            .then(data => {
              fetchObserver.next(data);
              fetchObserver.complete();
            });
        }
      }).catch(err => fetchObserver.error(err));
      return () => {
        cancelToken = true;
      };
  });
}

@Injectable()
export class HackerNewsAPIService {
  baseUrl: string;

  constructor() {
    this.baseUrl = 'https://node-hnapi.herokuapp.com';
  }

  fetchStories(storyType: string, page: number): Observable<Story[]> {
    return lazyFetch(`${this.baseUrl}/${storyType}?page=${page}`);
  }

  fetchItemContent(id: number): Observable<Story> {
    return lazyFetch(`${this.baseUrl}/item/${id}`).map( (story: Story) => {
      if (story.type === 'poll') {
        let numberOfPollOptions = story.poll.length;
        story.poll = [];
        for (let i = 1; i <= numberOfPollOptions; i++) {
          this.fetchPollContent(story.id + i).subscribe(pollResults => {
            story.poll.push(pollResults);
          });
        }
      }
      return story;
    });
  }

  fetchPollContent(id: number): Observable<PollResult> {
    return lazyFetch(`${this.baseUrl}/item/${id}`);
  }

  fetchUser(id: string): Observable<User> {
    return lazyFetch(`${this.baseUrl}/user/${id}`);
  }
}
