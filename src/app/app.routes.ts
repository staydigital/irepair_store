import { Routes } from '@angular/router'
import { HomeOneComponent } from './views/home/home-one.component'

export const rootRouterConfig: Routes = [
  {
    path: '',
    component: HomeOneComponent
  },
  {
    path: 'home',
    loadChildren: './views/home/home.module#HomeModule'
  },
  {
    path: '**',
    redirectTo: 'home/one'
  }
]
