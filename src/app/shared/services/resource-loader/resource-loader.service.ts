import { Injectable } from '@angular/core'
import text_resources from '../../../../assets/text_resources.json'
@Injectable({
  providedIn: 'root'
})
export class ResourceLoaderService {
  constructor () {}

  getValue (key: string): string {
    let value = text_resources[key]
    if (Array.isArray(value)) {
      return value.join(' ')
    }
    return value
  }
}
