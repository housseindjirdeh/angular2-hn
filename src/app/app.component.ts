import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { SettingsService } from './shared/services/services.module';
import { Settings } from './shared/models/settings';

declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  settings: Settings;
  theme: string;

  constructor(
    private _settingsService: SettingsService,
    public router: Router
  ) {
    this.settings = this._settingsService.settings;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }
}
