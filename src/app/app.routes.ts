import { Routes, RouterModule } from '@angular/router';

import { FeedComponent } from './feeds/feed/feed.component';

const feedRoutes = [{
  path: ':page',
  component: FeedComponent
}];

const routes: Routes = [
  {path: '', redirectTo: 'news/1', pathMatch: 'full'},
  {
    path: 'news',
    children: feedRoutes,
    data: {feedType: 'news'}
  },
  {
    path: 'newest',
    children: feedRoutes,
    data: {feedType: 'newest'}
  },
  {
    path: 'show',
    children: feedRoutes,
    data: {feedType: 'show'}
  },
  {
    path: 'ask',
    children: feedRoutes,
    data: {feedType: 'ask'}
  },
  {
    path: 'jobs',
    children: feedRoutes,
    data: {feedType: 'jobs'}
  },
  {path: 'item', loadChildren: () => import('./item-details/item-details.module').then(m => m.ItemDetailsModule)},
  {path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)}
];


// - Updated Export
export const routing = RouterModule.forRoot(routes);
