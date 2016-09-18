import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HackerNewsAPIService } from '../hackernews-api.service';

@Component({
  selector: 'app-item-comments',
  templateUrl: './item-comments.component.html',
  styleUrls: ['./item-comments.component.scss']
})
export class ItemCommentsComponent implements OnInit {
  sub: any;
  item;
  pollResults: any[] = [];


  constructor(
    private _hackerNewsAPIService: HackerNewsAPIService,
    private route: ActivatedRoute,
    private _location: Location
  ) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    
    this.sub = this.route.params.subscribe(params => {
      let itemID = +params['id'];
      this._hackerNewsAPIService.fetchComments(itemID).subscribe(data => {
        this.item = data;
        if(this.item.type === 'poll') {
          let howManyPollResults = this.item.poll.length;
          for (var i = 1; i <= howManyPollResults; i++) {
            this._hackerNewsAPIService.fetchPollResult(itemID + i).subscribe(data => {
              this.pollResults.push(data);
            })
          }
        }
      }, error => console.log('Could not load item' + itemID));
    });
  }

  goBack() {
    this._location.back();
  }
}
