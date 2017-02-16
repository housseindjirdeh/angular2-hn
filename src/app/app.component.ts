import { Component } from '@angular/core';

import { SettingsService } from './shared/services/services.module';
import { Settings } from './shared/models/settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  settings: Settings;
  theme: string;

  constructor(private _settingsService: SettingsService) {
    this.settings = this._settingsService.settings;
  }
}
