import { Injectable } from '@angular/core';

import { Settings } from './settings';

@Injectable()
export class SettingsService {
  settings: Settings = {
    showSettings : false,
    openLinkInNewTab: localStorage.getItem("openLinkInNewTab") ? JSON.parse(localStorage.getItem("openLinkInNewTab")) : false
  };

  constructor() { }

  toggleSettings() {
    this.settings.showSettings = !this.settings.showSettings;
  }

  toggleOpenLinksInNewTab() {
    this.settings.openLinkInNewTab = !this.settings.openLinkInNewTab;
    localStorage.setItem("openLinkInNewTab", JSON.stringify(this.settings.openLinkInNewTab));
  }
}
