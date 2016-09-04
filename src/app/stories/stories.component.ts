import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})

export class StoriesComponent implements OnInit {
  items: number[];

  constructor() { 
    this.items = Array(30).fill().map((x,i)=>i);
  }

  ngOnInit() {
  }
}
