import { Component, OnInit } from '@angular/core'
import { ResourceLoaderService } from 'app/shared/services/resource-loader/resource-loader.service'

@Component({
  selector: 'app-reparaturauftrag',
  templateUrl: './reparaturauftrag.component.html',
  styleUrls: ['./reparaturauftrag.component.scss']
})
export class ReparaturauftragComponent implements OnInit {
  text1: string
  text2: string
  constructor (private resourceLoaderService: ResourceLoaderService) {}

  ngOnInit () {
    this.text1 = this.resourceLoaderService.getValue('reparaturauftrag_text1')
    this.text2 = this.resourceLoaderService.getValue('reparaturauftrag_text2')
  }
}
