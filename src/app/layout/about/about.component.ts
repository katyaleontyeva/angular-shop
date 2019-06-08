import { Component, OnInit, Optional, Inject } from '@angular/core';

import { LocalStorageService } from '../../core/services/local-storage.service';
import { ConfigOptionsService } from '../../core/services/config-options.service';
import { ConstantsService } from '../../core/services/constants.service';
import { GeneratorService } from '../../core/services/generator';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    @Optional() private localStorageService: LocalStorageService,
    @Optional() private configOptionsService: ConfigOptionsService,
    @Optional() @Inject(ConstantsService) private constants: object,
    @Optional() @Inject(GeneratorService) private random10: string
  ) { }

  ngOnInit() {
    console.log(this.localStorageService ? 'LocalStorageService loaded' : 'LocalStorageService not found.');
    console.log(this.configOptionsService ? 'ConfigOptionsService loaded' : 'ConfigOptionsService not found.');
    console.log(this.constants ? `ConstantsService: ${JSON.stringify(this.constants)}` : 'ConstantsService not found.');
    console.log(this.random10 ? `GeneratorService: ${this.random10}` : 'GeneratorService not found.');
  }

}
