import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ServicesModule } from './shared/services/services.module';
import { FeedComponent } from "./feeds/feed/feed.component";
import { ItemComponent } from "./feeds/item/item.component";
import { SharedComponentsModule } from "./shared/components/shared-components.module";
import { PipesModule } from "./shared/pipes/pipes.module";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ServicesModule.forRoot(),
    CoreModule,
    SharedComponentsModule,
    PipesModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }

