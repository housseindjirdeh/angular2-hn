import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ServicesModule } from './shared/services/services.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ServicesModule.forRoot(),
    CoreModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
