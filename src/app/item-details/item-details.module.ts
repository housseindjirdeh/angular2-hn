import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailsComponent } from './item-details.component';
import { CommentComponent } from './comment/comment.component';
import { SharedComponentsModule } from '../shared/components/shared-components.module';
import { PipesModule } from '../shared/pipes/pipes.module';


const routes: Routes = [
  {
    path: ':id',
    component: ItemDetailsComponent
  }
]

@NgModule({
  imports: [ SharedComponentsModule, CommonModule, RouterModule, PipesModule, RouterModule.forChild(routes) ],
  declarations: [ ItemDetailsComponent, CommentComponent ],
  exports: [ ItemDetailsComponent, RouterModule]
})
export class ItemDetailsModule {}
