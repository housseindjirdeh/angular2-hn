import { Component, Input, OnInit } from '@angular/core';
import { Comment } from  '../../shared/models/comment';

@Component({
  selector: 'app-comment-tree',
  templateUrl: './comment-tree.component.html',
  styleUrls: ['./comment-tree.component.scss']
})
export class CommentTreeComponent implements OnInit {
  @Input() commentTree: Comment[];

  constructor() {}

  ngOnInit() {}

}
