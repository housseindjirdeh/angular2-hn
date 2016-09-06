import { Component, Input, OnInit } from '@angular/core';

import { HackerNewsAPIService } from '../hackernews-api.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() commentID: number;
  comment; 
  collapse: boolean;

  constructor(private _hackerNewsAPIService: HackerNewsAPIService) {}

  ngOnInit() {
    this._hackerNewsAPIService.fetchItem(this.commentID).subscribe(data => {
      this.comment = data;
    }, error => console.log('Could not load comment' + this.commentID));

    this.collapse = false;
  }
}
