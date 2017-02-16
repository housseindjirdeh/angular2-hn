import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { ItemComponent } from './item/item.component';
import { SharedComponentsModule } from '../shared/components/shared-components.module';
import { PipesModule } from '../shared/pipes/pipes.module';


const routes: Routes = [
  {
    path: ':page',
    component: FeedComponent
  }
];


@NgModule({
  imports: [ CommonModule, SharedComponentsModule, RouterModule, RouterModule.forChild(routes) , PipesModule ],
  declarations: [ FeedComponent, ItemComponent ],
  exports: [ FeedComponent, RouterModule ]
})
export class FeedsModule {}
