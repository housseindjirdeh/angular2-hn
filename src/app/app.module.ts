import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoriesComponent } from './stories/stories.component';
import { FooterComponent } from './footer/footer.component';
import { ItemComponent } from './item/item.component';

import { HackerNewsAPIService } from './hackernews-api.service';
import { UserComponent } from './user/user.component';
import { ItemCommentsComponent } from './item-comments/item-comments.component';
import { CommentTreeComponent } from './comment-tree/comment-tree.component';
import { CommentComponent } from './comment/comment.component';
import { CommentPipe } from './comment.pipe';
import { LoaderComponent } from './loader/loader.component';
import { ErrorMessageComponent } from './error-message/error-message.component';

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
    CommentPipe,
    LoaderComponent,
    ErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [HackerNewsAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
