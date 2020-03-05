import { Component, OnInit, Input } from '@angular/core'
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel'
import { ResourceLoaderService } from 'app/shared/services/resource-loader/resource-loader.service'

@Component({
  selector: 'app-testimonials-carousel',
  templateUrl: './testimonials-carousel.component.html',
  styleUrls: ['./testimonials-carousel.component.scss']
})
export class TestimonialsCarouselComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray
  text1: string
  text2: string
  public carouselOptions: NguCarouselConfig
  public testimonials = [
    {
      logo: 'assets/images/microsoldering_carussel1.jpg'
    },
    {
      logo: 'assets/images/microsoldering_carussel2.jpg'
    },
    {
      logo: 'assets/images/microsoldering_carussel3.jpg'
    },
    {
      logo: 'assets/images/microsoldering_new.jpg'
    },
    {
      logo: 'assets/images/microsoldering_new2.jpg'
    },
    {
      logo: 'assets/images/microsoldering_new3.jpg'
    },
    {
      logo: 'assets/images/microsoldering_new4.jpg'
    },
    {
      logo: 'assets/images/microsoldering_new5.jpg'
    },
    {
      logo: 'assets/images/microsoldering_new6.jpg'
    },
    {
      logo: 'assets/images/microsoldering_new7.jpg'
    },
    {
      logo: 'assets/images/microsoldering_new8.jpg'
    },
    {
      logo: 'assets/images/microsoldering_new9.jpg'
    }
  ]
  constructor (private resourceLoaderService: ResourceLoaderService) {}

  ngOnInit () {
    this.text1 = this.resourceLoaderService.getValue('microsoldering_text1')
    this.text2 = this.resourceLoaderService.getValue('microsoldering_text2')
    this.carouselOptions = {
      grid: { xs: 1, sm: 1, md: 3, lg: 3, all: 0 },
      slide: 3,
      speed: 400,
      interval: { timing: 4000 },
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true
    }
  }
}
