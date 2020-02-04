import { Component, OnInit, Input } from '@angular/core'
import { ResourceLoaderService } from 'app/shared/services/resource-loader/resource-loader.service'

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  text1: string
  text2: string
  text3: string
  text4: string
  text5: string
  text6: string
  constructor (private resourceLoaderService: ResourceLoaderService) {}

  ngOnInit () {
    this.text1 = this.resourceLoaderService.getValue('handy_reparatur_text1')
    this.text2 = this.resourceLoaderService.getValue('handy_reparatur_text2')
    this.text3 = this.resourceLoaderService.getValue('handy_reparatur_text3')
    this.text4 = this.resourceLoaderService.getValue('handy_reparatur_text4')
    this.text5 = this.resourceLoaderService.getValue('handy_reparatur_text5')
    this.text6 = this.resourceLoaderService.getValue('handy_reparatur_text6')
  }
}
