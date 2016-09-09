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
  storiesType: string;
  pageNum: number;
  listStart: number;

  constructor(
    private _hackerNewsAPIService: HackerNewsAPIService, 
    private _router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let currentRoute = this._router.url;

    if (currentRoute.includes('newest')) {
      this.storiesType = 'newest';
    } else if (currentRoute.includes('show')) {
      this.storiesType = 'show';
    } else if (currentRoute.includes('ask')) {
      this.storiesType = 'ask';
    } else if (currentRoute.includes('jobs')) {
      this.storiesType = 'jobs';
    } else {
      this.storiesType = 'news';
    }

    this.sub = this.route.params.subscribe(params => {
      this.pageNum = params['page'] ? +params['page'] : 1;
    });

    this._hackerNewsAPIService.fetchStories(this.storiesType, this.pageNum)
                              .subscribe(
                                items => this.items = items,
                                error => console.log('Error fetching' + this.storiesType + 'stories'),
                                () => this.listStart = ((this.pageNum - 1) * 30) + 1);
  }

  changePage(pageNum) {
    this._hackerNewsAPIService.fetchStories(this.storiesType, pageNum)
                              .subscribe(
                                items => this.items = items,
                                error => console.log('Error fetching' + this.storiesType + 'stories'),
                                () => this.changeListStartAndScroll(pageNum));
  }

  changeListStartAndScroll(pageNum) {
    window.scrollTo(0, 0);
    this.listStart = ((pageNum - 1) * 30) + 1;
  }
}
