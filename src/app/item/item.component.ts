import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
	@Input() item;

  constructor() {}

  ngOnInit() {

  }

  get hasUrl():boolean {
    return this.item.url.indexOf('http') === 0;
  }

}
