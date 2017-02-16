import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { ItemComponent } from './item/item.component';
import { SharedComponentsModule } from '../shared/components/shared-components.module';
import { PipesModule } from '../shared/pipes/pipes.module';

@NgModule({
  imports: [ CommonModule, SharedComponentsModule, RouterModule, PipesModule ],
  declarations: [ FeedComponent, ItemComponent ],
  exports: [ FeedComponent ]
})
export class FeedsModule {}
