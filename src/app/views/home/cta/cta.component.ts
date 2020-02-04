import { Component, OnInit } from '@angular/core'
import { ResourceLoaderService } from 'app/shared/services/resource-loader/resource-loader.service'

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CtaComponent implements OnInit {
  text1: string
  text2: string
  text3: string
  constructor (private resourceLoaderService: ResourceLoaderService) {}

  ngOnInit () {
    this.text1 = this.resourceLoaderService.getValue('data_rescue_text1')
    this.text2 = this.resourceLoaderService.getValue('data_rescue_text2')
    this.text3 = this.resourceLoaderService.getValue('data_rescue_text3')
  }
}
