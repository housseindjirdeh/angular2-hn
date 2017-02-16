import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoriesComponent } from './stories/stories.component';
import { FooterComponent } from './footer/footer.component';
import { ItemComponent } from './item/item.component';

import { ServicesModule } from './shared/services/services.module';
import { UserComponent } from './user/user.component';
import { ItemCommentsComponent } from './item-comments/item-comments.component';
import { CommentTreeComponent } from './comment-tree/comment-tree.component';
import { CommentComponent } from './comment/comment.component';
import { PipesModule } from './shared/pipes/pipes.module';
import { SharedComponentsModule } from './shared/components/shared-components.module';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoriesComponent,
    FooterComponent,
    ItemComponent,
    UserComponent,
    ItemCommentsComponent,
    CommentTreeComponent,
    CommentComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ServicesModule.forRoot(),
    PipesModule,
    SharedComponentsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
