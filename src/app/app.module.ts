import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ServicesModule } from './shared/services/services.module';
import { FeedsModule } from './feeds/feeds.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ServicesModule.forRoot(),
    CoreModule,
    FeedsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
