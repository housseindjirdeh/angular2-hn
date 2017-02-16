import { NgModule } from '@angular/core';
import { HackerNewsAPIService } from './hackernews-api.service';
import { SettingsService } from './settings.service';
@NgModule({
  imports: [],
  exports : [],
  declarations: [],
  providers: []
})
export class ServicesModule{
  static forRoot() {
    return {
      ngModule: ServicesModule,
      providers: [
        HackerNewsAPIService,
        SettingsService
      ]
    }
  }
}


export {
  HackerNewsAPIService,
  SettingsService
}
