import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ItemCommentsComponent } from './item-comments.component';
import { CommentTreeComponent } from './comment-tree/comment-tree.component';
import { CommentComponent } from './comment/comment.component';
import { SharedComponentsModule } from '../shared/components/shared-components.module';
import { PipesModule } from '../shared/pipes/pipes.module';
@NgModule({
  imports: [ SharedComponentsModule, CommonModule, RouterModule, PipesModule ],
  declarations: [ ItemCommentsComponent, CommentTreeComponent, CommentComponent ],
  exports: [ ItemCommentsComponent]
})
export class ItemCommentsModule {}
