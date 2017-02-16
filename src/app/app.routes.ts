import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedComponent } from './feeds/feed/feed.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: '', component: FeedComponent, data: {feedType: 'news'}},
  {path: 'news/:page', component: FeedComponent, data: {feedType: 'news'}},
  {path: 'newest/:page', component: FeedComponent, data: {feedType: 'newest'}},
  {path: 'show/:page', component: FeedComponent, data: {feedType: 'show'}},
  {path: 'ask/:page', component: FeedComponent, data: {feedType: 'ask'}},
  {path: 'jobs/:page', component: FeedComponent, data: {feedType: 'jobs'}},
  {path: 'item', loadChildren: 'app/item-details/item-details.module#ItemDetailsModule'},
  {path: 'user', loadChildren: 'app/user/user.module#UserModule'}
];

// - Updated Export
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
