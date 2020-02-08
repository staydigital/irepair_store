import { Routes } from '@angular/router'
import { HomeOneComponent } from './views/home/home-one.component'
import { DatenschutzComponent } from './views/home/datenschutz/datenschutz.component'
import { ImpressumComponent } from './views/impressum/impressum.component'

export const rootRouterConfig: Routes = [
  {
    path: 'irepair_store',
    component: HomeOneComponent
  },
  {
    path: 'datenschutz',
    component: DatenschutzComponent
  },
  {
    path: 'impressum',
    component: ImpressumComponent
  }
]
