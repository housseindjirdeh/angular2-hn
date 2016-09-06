import { Component, Input, OnInit } from '@angular/core';

import { HackerNewsAPIService } from '../hackernews-api.service';

@Component({
  selector: 'app-comment-tree',
  templateUrl: './comment-tree.component.html',
  styleUrls: ['./comment-tree.component.scss']
})
export class CommentTreeComponent implements OnInit {
  @Input() itemKids: string;
  @Input() itemCount: number;
  indexFrom: number;
  indexChange: number;

  constructor(private _hackerNewsAPIService: HackerNewsAPIService) {}

  ngOnInit() {
    this.itemKids = JSON.parse("[" + this.itemKids + "]");

    if (this.itemCount <= 50) {
      this.indexChange = 10;
    } else if (this.itemCount <= 100) {
      this.indexChange = 7;
    } else if (this.itemCount <= 150) {
      this.indexChange = 5;
    } else {
      this.indexChange = 3;
    }

    this.indexFrom = this.indexChange;
  }

  loadMore() {
    this.indexFrom += this.indexChange;
  }

}
