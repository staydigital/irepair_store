import { Component, OnInit, Input } from '@angular/core'
import { ResourceLoaderService } from 'app/shared/services/resource-loader/resource-loader.service'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray

  handy_reparatur_intro: string

  microsoldering_intro: string

  data_rescue_intro: string

  constructor (private resourceLoaderService: ResourceLoaderService) {}

  ngOnInit () {
    this.handy_reparatur_intro = this.resourceLoaderService.getValue(
      'handy_reparatur_intro'
    )
    this.microsoldering_intro = this.resourceLoaderService.getValue(
      'microsoldering_intro'
    )
    this.data_rescue_intro = this.resourceLoaderService.getValue(
      'data_rescue_intro'
    )
  }
}
