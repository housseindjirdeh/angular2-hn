import { Component, OnInit } from '@angular/core';

import { SettingsService } from '../../shared/services/services.module';
import { Settings } from '../../shared/models/settings';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  settings: Settings;

  constructor(private _settingsService: SettingsService) {
    this.settings = this._settingsService.settings;
  }

  ngOnInit() {
  }

  toggleSettings() {
    this._settingsService.toggleSettings();
  }

  scrollTop() {
    window.scrollTo(0, 0);
  }
}
