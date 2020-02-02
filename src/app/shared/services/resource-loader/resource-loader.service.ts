import { Injectable } from '@angular/core'
import text_resources from '../../../../assets/text_resources.json'
@Injectable({
  providedIn: 'root'
})
export class ResourceLoaderService {
  constructor () {
    console.log(text_resources)
  }

  getValue (key: string): string {
    let value = text_resources[key]
    if (Array.isArray(value)) {
      console.log('TEST')
      return value.join('\r\n')
    }
    return value
  }
}
