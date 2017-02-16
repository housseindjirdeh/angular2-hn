import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './user/user.component';
import { SettingsComponent } from './settings/settings.component';

import { ItemCommentsModule } from './item-comments/item-comments.module';
import { ServicesModule } from './shared/services/services.module';
import { PipesModule } from './shared/pipes/pipes.module';
import { SharedComponentsModule } from './shared/components/shared-components.module';
import { FeedsModule } from './feeds/feeds.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ServicesModule.forRoot(),
    ItemCommentsModule,
    PipesModule,
    SharedComponentsModule,
    FeedsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
