import { Component, OnInit } from '@angular/core'
import {
  NgcCookieConsentService,
  NgcInitializeEvent,
  NgcStatusChangeEvent,
  NgcNoCookieLawEvent
} from 'ngx-cookieconsent'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  private popupOpenSubscription: Subscription
  private popupCloseSubscription: Subscription
  private initializeSubscription: Subscription
  private statusChangeSubscription: Subscription
  private revokeChoiceSubscription: Subscription
  private noCookieLawSubscription: Subscription

  constructor (private ccService: NgcCookieConsentService) {}

  ngOnInit () {
    this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(() => {
      // you can use this.ccService.getConfig() to do stuff...
      console.log('popupOpen')
    })

    this.popupCloseSubscription = this.ccService.popupClose$.subscribe(() => {
      // you can use this.ccService.getConfig() to do stuff...
      console.log('popuClose')
    })

    this.initializeSubscription = this.ccService.initialize$.subscribe(
      (event: NgcInitializeEvent) => {
        // you can use this.ccService.getConfig() to do stuff...
        console.log(`initialize: ${JSON.stringify(event)}`)
      }
    )

    this.statusChangeSubscription = this.ccService.statusChange$.subscribe(
      (event: NgcStatusChangeEvent) => {
        // you can use this.ccService.getConfig() to do stuff...
        console.log(`statusChange: ${JSON.stringify(event)}`)
      }
    )

    this.revokeChoiceSubscription = this.ccService.revokeChoice$.subscribe(
      () => {
        // you can use this.ccService.getConfig() to do stuff...
        console.log(`revokeChoice`)
      }
    )

    this.noCookieLawSubscription = this.ccService.noCookieLaw$.subscribe(
      (event: NgcNoCookieLawEvent) => {
        // you can use this.ccService.getConfig() to do stuff...
        console.log(`noCookieLaw: ${JSON.stringify(event)}`)
      }
    )
  }

  ngOnDestroy () {
    // unsubscribe to cookieconsent observables to prevent memory leaks
    this.popupOpenSubscription.unsubscribe()
    this.popupCloseSubscription.unsubscribe()
    this.initializeSubscription.unsubscribe()
    this.statusChangeSubscription.unsubscribe()
    this.revokeChoiceSubscription.unsubscribe()
    this.noCookieLawSubscription.unsubscribe()
  }
}
