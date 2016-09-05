import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';

import { HackerNewsAPIService } from '../hackernews-api.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})

export class StoriesComponent implements OnInit {
  sub: any;
  items;
  indexFrom: number;
  storiesType: string;
  pageNum: number;

  constructor(
    private _hackerNewsAPIService: HackerNewsAPIService, 
    private _router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let currentRoute = this._router.url;
    
    if (currentRoute.includes('newest')) {
      this.storiesType = 'newest';
      this._hackerNewsAPIService.fetchStories('newstories')
                    .subscribe(
                      items => this.items = items,
                      error => console.log('Error fetching new stories'));
    } else if (currentRoute.includes('show')) {
      this.storiesType = 'show';
      this._hackerNewsAPIService.fetchStories('showstories')
                    .subscribe(
                      items => this.items = items,
                      error => console.log('Error fetching show stories'));
    } else if (currentRoute.includes('ask')) {
      this.storiesType = 'ask';
      this._hackerNewsAPIService.fetchStories('askstories')
                    .subscribe(
                      items => this.items = items,
                      error => console.log('Error fetching ask stories'));
    } else if (currentRoute.includes('jobs')) {
      this.storiesType = 'jobs';
      this._hackerNewsAPIService.fetchStories('jobstories')
                    .subscribe(
                      items => this.items = items,
                      error => console.log('Error fetching job stories'));
    } else {
      this.storiesType = 'news';
      this._hackerNewsAPIService.fetchStories('topstories')
                    .subscribe(
                      items => this.items = items,
                      error => console.log('Error fetching top stories'));
    }

    this.sub = this.route.params.subscribe(params => {
      this.pageNum = params['page'] ? +params['page'] : 1;
      this.indexFrom = ((this.pageNum - 1) * 30);
    });
  }

  scrollTop() {
    window.scrollTo(0, 0);
  }
}
