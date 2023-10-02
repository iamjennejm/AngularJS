import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/*import { AppModule } from './app/app.module';*/
import { AppComponent } from './app/app.component';

/*platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
*/

import { bootstrapApplication,provideProtractorTestingSupport } from '@angular/platform-browser';

bootstrapApplication(AppComponent,
    {providers: [provideProtractorTestingSupport()]})
  .catch(err => console.error(err));


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/