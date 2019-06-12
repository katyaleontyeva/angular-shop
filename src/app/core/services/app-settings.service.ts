import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CoreModule } from '../core.module';

import { LocalStorageService } from './local-storage.service';


@Injectable({
  providedIn: CoreModule
})
export class AppSettingsService {
  private defaultSettings = {
    baseUrl: 'http://localhost:3000'
  };

  private appSettingsUrl = '/assets/app-settings.json';

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  getSettings() {
    const settingsFromLS = this.localStorageService.getItem('settings');

    if (settingsFromLS) {
      return JSON.parse(settingsFromLS);
    } else {
      this.http.get(this.appSettingsUrl)
        .subscribe(
          (data) => {
            this.localStorageService.setItem('settings', JSON.stringify(data));
            return data;
          },
          (err) => {
            this.localStorageService.setItem('settings', JSON.stringify(this.defaultSettings));
            return this.defaultSettings;
          }
        );
    }
  }

}
