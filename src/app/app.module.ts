import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routes';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { ItemDetailsModule } from './item-details/item-details.module';
import { ServicesModule } from './shared/services/services.module';
import { PipesModule } from './shared/pipes/pipes.module';
import { SharedComponentsModule } from './shared/components/shared-components.module';
import { FeedsModule } from './feeds/feeds.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ServicesModule.forRoot(),
    CoreModule,
    ItemDetailsModule,
    PipesModule,
    SharedComponentsModule,
    FeedsModule,
    UserModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
