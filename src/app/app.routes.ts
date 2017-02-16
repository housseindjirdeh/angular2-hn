import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoriesComponent } from './stories/stories.component';
import { ItemCommentsComponent } from './item-comments/item-comments.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: '', component: StoriesComponent, data: {storiesType: 'news'}},
  {path: 'news/:page', component: StoriesComponent, data: {storiesType: 'news'}},
  {path: 'newest/:page', component: StoriesComponent, data: {storiesType: 'newest'}},
  {path: 'show/:page', component: StoriesComponent, data: {storiesType: 'show'}},
  {path: 'ask/:page', component: StoriesComponent, data: {storiesType: 'ask'}},
  {path: 'jobs/:page', component: StoriesComponent, data: {storiesType: 'jobs'}},
  {path: 'item/:id', component: ItemCommentsComponent},
  {path: 'user/:id', component: UserComponent}
];

// - Updated Export
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
