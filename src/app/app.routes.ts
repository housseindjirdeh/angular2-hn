import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedComponent } from './feeds/feed/feed.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: '', component: FeedComponent, data: {feedType: 'news'}},
  {path: 'news/:page', component: FeedComponent, data: {feedType: 'news'}},
  {path: 'newest/:page', component: FeedComponent, data: {feedType: 'newest'}},
  {path: 'show/:page', component: FeedComponent, data: {feedType: 'show'}},
  {path: 'ask/:page', component: FeedComponent, data: {feedType: 'ask'}},
  {path: 'jobs/:page', component: FeedComponent, data: {feedType: 'jobs'}},
  {path: 'item/:id', component: ItemDetailsComponent},
  {path: 'user/:id', component: UserComponent}
];

// - Updated Export
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
