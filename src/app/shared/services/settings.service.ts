import { Injectable } from '@angular/core';

import { Settings } from '../models/settings';

@Injectable()
export class SettingsService {
  settings: Settings = {
    showSettings : false,
    openLinkInNewTab: localStorage.getItem("openLinkInNewTab") ? JSON.parse(localStorage.getItem("openLinkInNewTab")) : false,
    theme: localStorage.getItem("theme") ? localStorage.getItem("theme") : 'default',
    titleFontSize: localStorage.getItem("titleFontSize") ? localStorage.getItem("titleFontSize") : '16',
    listSpacing: localStorage.getItem("listSpacing") ? localStorage.getItem("listSpacing") : '0',
  };

  constructor() { }

  toggleSettings() {
    this.settings.showSettings = !this.settings.showSettings;
  }

  toggleOpenLinksInNewTab() {
    this.settings.openLinkInNewTab = !this.settings.openLinkInNewTab;
    localStorage.setItem("openLinkInNewTab", JSON.stringify(this.settings.openLinkInNewTab));
  }

  setTheme(theme) {
    this.settings.theme = theme;
    localStorage.setItem("theme", this.settings.theme);
  }

  setFont(fontSize){
    this.settings.titleFontSize = fontSize;
    localStorage.setItem("titleFontSize", this.settings.titleFontSize);
  }

  setSpacing(listSpace){
    this.settings.listSpacing = listSpace;
    localStorage.setItem("listSpacing", this.settings.listSpacing);
  }
}
