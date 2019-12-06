import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  settings: Settings = {
    themeUrl: 'assets/css/colors/default.css',
    theme: 'default'
  }
  constructor(@Inject(DOCUMENT) private _document) {
    this.loadSettings();
  }
  saveSettings() {
    localStorage.setItem('ajuste', JSON.stringify(this.settings));
  }

  loadSettings() {
    if (localStorage.getItem('ajuste')) {
      this.settings = JSON.parse(localStorage.getItem('ajuste'));
      this.aplyTheme(this.settings.theme);
    } else {

    }
  }
  aplyTheme(theme: string) {
    const url = `assets/css/colors/${theme}.css`;
    this._document.getElementById('theme').setAttribute('href', url);
    this.settings.theme = theme;
    this.settings.themeUrl = url;
    this.saveSettings();
  }

}
interface Settings {
  themeUrl: string;
  theme: string;
}