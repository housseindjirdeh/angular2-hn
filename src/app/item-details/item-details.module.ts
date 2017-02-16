import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ItemDetailsComponent } from './item-details.component';
import { CommentComponent } from './comment/comment.component';
import { SharedComponentsModule } from '../shared/components/shared-components.module';
import { PipesModule } from '../shared/pipes/pipes.module';

@NgModule({
  imports: [ SharedComponentsModule, CommonModule, RouterModule, PipesModule ],
  declarations: [ ItemDetailsComponent, CommentComponent ],
  exports: [ ItemDetailsComponent]
})
export class ItemDetailsModule {}
