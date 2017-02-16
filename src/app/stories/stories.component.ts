import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

import { HackerNewsAPIService } from '../shared/services/hackernews-api.service';
import { Story } from '../shared/models/story';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})

export class StoriesComponent implements OnInit {
  typeSub: Subscription;
  pageSub: Subscription;
  items: Story[];
  storiesType;
  pageNum: number;
  listStart: number;
  errorMessage: string;

  constructor(
    private _hackerNewsAPIService: HackerNewsAPIService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.typeSub = this.route
      .data
      .subscribe(data => this.storiesType = (data as any).storiesType);

    this.pageSub = this.route.params.subscribe(params => {
      this.pageNum = params['page'] ? +params['page'] : 1;
      this._hackerNewsAPIService.fetchStories(this.storiesType, this.pageNum)
                              .subscribe(
                                items => this.items = items,
                                error => this.errorMessage = 'Could not load ' + this.storiesType + ' stories.',
                                () => {
                                  this.listStart = ((this.pageNum - 1) * 30) + 1;
                                  window.scrollTo(0, 0);
                                });
    });
  }
}
