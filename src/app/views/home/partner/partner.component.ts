import { Component, OnInit, Input } from '@angular/core'
import { ResourceLoaderService } from 'app/shared/services/resource-loader/resource-loader.service'

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {
  data_rescue_intro: string

  constructor (private resourceLoaderService: ResourceLoaderService) {}

  ngOnInit () {}
}
