import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';

import { ConfigModel } from '../models/config.model';

@Injectable({
  providedIn: CoreModule
})
export class ConfigOptionsService {
  private config: ConfigModel = new ConfigModel();

  constructor() { }

  setConfig(settings: object) {
    for (const key in settings) {
      this.config[key] = settings[key];
    }
    this.config.lastUpdate = new Date();
  }

  getConfig() {
    return this.config;
  }
}
