import { Component, OnInit, OnDestroy } from '@angular/core'

@Component({
  selector: 'app-home-one',
  template: `
    <div class="landing">
      <app-header isLandingPage="true"></app-header>
      <app-portfolio></app-portfolio>
      <app-services></app-services>
      <app-testimonials-carousel></app-testimonials-carousel>
      <app-cta></app-cta>
      <app-reparaturauftrag></app-reparaturauftrag>
      <app-partner></app-partner>
      <app-footer></app-footer>
    </div>
  `
})
export class HomeOneComponent implements OnInit, OnDestroy {
  constructor () {}

  ngOnInit () {}
  ngOnDestroy () {}
}
