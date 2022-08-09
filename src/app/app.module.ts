import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { ProfileComponent } from './profile/profile.component';

const  yourOktaDomain = 'dev-41696345.okta.com';
const  yourClientID = '0oa62opodsO5hopLI5d7';
const oktaAuth = new OktaAuth({
  issuer: `https://${yourOktaDomain}/oauth2/default`,
  clientId: `${yourClientID}`,
  redirectUri: window.location.origin + '/login/callback'
});

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule
  ],
  providers: [{provide: OKTA_CONFIG, useValue: {oktaAuth}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
