import { Routes, RouterModule } from '@angular/router';

import { StoriesComponent } from './stories/stories.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: StoriesComponent},
  { path: 'news/:page', component: StoriesComponent },
  { path: 'newest/:page', component: StoriesComponent },
  { path: 'show/:page', component: StoriesComponent },
  { path: 'ask/:page', component: StoriesComponent },
  { path: 'jobs/:page', component: StoriesComponent },
  { path: 'user/:id', component: UserComponent }
];

// - Updated Export
export const routing = RouterModule.forRoot(routes);