import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SharedModule } from './shared/shared.module'
import { rootRouterConfig } from './app.routes'
import { AppComponent } from './app.component'
import { HomeModule } from './views/home/home.module'
import {
  NgcCookieConsentModule,
  NgcCookieConsentConfig
} from 'ngx-cookieconsent'

const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: 'localhost'
  },
  position: 'bottom-left',
  theme: 'classic',
  palette: {
    popup: {
      background: '#000000',
      text: '#ffffff',
      link: '#ffffff'
    },
    button: {
      background: '#f1d600',
      text: '#000000',
      border: 'transparent'
    }
  },
  type: 'info',
  content: {
    message:
      'Um unsere Webseiten für Sie optimal zu gestalten und fortlaufend zu verbessern verwenden wir Cookies. Durch Bestätigen des Buttons "Akzeptieren" stimmen Sie der Verwendung zu. Weitere Informationen erhalten Sie in unserer ',
    dismiss: 'Akzeptieren',
    deny: 'Refuse cookies',
    link: 'Datenschutzerklärung',
    href: '/datenschutz',
    policy: 'Cookie Policy'
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HomeModule,
    SharedModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    NgcCookieConsentModule.forRoot(cookieConfig)
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
