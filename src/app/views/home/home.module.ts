import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { FlexLayoutModule } from '@angular/flex-layout'
import { NguCarouselModule } from '@ngu/carousel'
import { SharedModule } from '../../shared/shared.module'
import { HomeRoutes } from './home.routing'

import { HomeOneComponent } from './home-one.component'
import { HomeTwoComponent } from './home-two.component'
import { HeaderComponent } from './header/header.component'
import { IntroOneComponent } from './intro-one/intro-one.component'
import { IntroTwoComponent } from './intro-two/intro-two.component'
import { PortfolioComponent } from './portfolio/portfolio.component'
import { ServicesComponent } from './services/services.component'
import { CtaComponent } from './cta/cta.component'
import { PricingsComponent } from './pricings/pricings.component'
import { ContactComponent } from './contact/contact.component'
import { FooterComponent } from './footer/footer.component'
import { TestimonialsComponent } from './testimonials/testimonials.component'
import { PortfolioCarouselComponent } from './portfolio-carousel/portfolio-carousel.component'
import { TestimonialsCarouselComponent } from './testimonials-carousel/testimonials-carousel.component'
import { ServicesCarouselComponent } from './services-carousel/services-carousel.component'
import { DemoComponent } from './demo/demo.component'
import { AllSectionsComponent } from './all-sections.component'

import { WINDOW_PROVIDERS } from '../../shared/helpers/window.helper'

import { SharedMaterialModule } from 'app/shared/shared-material.module'
import { SharedDirectivesModule } from 'app/shared/directives/shared-directives.module'
import { SharedComponentsModule } from 'app/shared/components/shared-components.module'
import { ResourceLoaderService } from 'app/shared/services/resource-loader/resource-loader.service'
import { ReparaturauftragComponent } from './reparaturauftrag/reparaturauftrag.component'
import { NgcCookieConsentModule } from 'ngx-cookieconsent'
import { DatenschutzComponent } from './datenschutz/datenschutz.component'
import { ImpressumComponent } from '../impressum/impressum.component'
import { PartnerComponent } from './partner/partner.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    SharedDirectivesModule,
    SharedComponentsModule,
    SharedMaterialModule,
    FlexLayoutModule,
    NguCarouselModule,
    RouterModule.forChild(HomeRoutes),
    NgcCookieConsentModule
  ],
  declarations: [
    HomeOneComponent,
    HomeTwoComponent,
    HeaderComponent,
    IntroOneComponent,
    IntroTwoComponent,
    PortfolioComponent,
    ServicesComponent,
    CtaComponent,
    PricingsComponent,
    ContactComponent,
    FooterComponent,
    TestimonialsComponent,
    PortfolioCarouselComponent,
    TestimonialsCarouselComponent,
    ServicesCarouselComponent,
    DemoComponent,
    AllSectionsComponent,
    ReparaturauftragComponent,
    PartnerComponent,
    DatenschutzComponent,
    ImpressumComponent
  ],
  providers: [WINDOW_PROVIDERS, ResourceLoaderService]
})
export class HomeModule {}
