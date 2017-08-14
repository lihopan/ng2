import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';


// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService } from './_services/index';

import { Pages } from './pages.component';

@NgModule({
  imports: [CommonModule, AppTranslationModule, NgaModule, routing],
  declarations: [Pages],
  providers: [

    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions,

    AuthGuard,
    AuthenticationService,
    UserService
  ]
})
export class PagesModule {
}
