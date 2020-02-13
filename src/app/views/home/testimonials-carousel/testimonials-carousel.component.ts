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
      logo: 'assets/images/microsoldering_carussel1.jpg',
      photo: 'assets/images/face-1.jpg',
      text: `“I’ve tried using different softwares. The computer is not my strong side. 
    There is excellent support behind DevEgret and people to walk you through it. 
    If you have any questions they’ll go over that and explain to you how to do that. ”`,
      title: 'Jhone Doe',
      subtitle: 'Product Manager'
    },
    {
      logo: 'assets/images/microsoldering_carussel2.jpg',
      photo: 'assets/images/face-2.jpg',
      text: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi voluptas vero iusto fuga quos totam eius,
    atis magnam tempora doloribus ducimus dolorem culpa animi beatae tenetur! Sapiente, quia tempora."`,
      title: 'Adam Smith',
      subtitle: 'CEO'
    },
    {
      logo: 'assets/images/microsoldering_carussel3.jpg',
      photo: 'assets/images/face-3.jpg',
      text: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi voluptas vero iusto fuga quos totam eius,
    atis magnam tempora doloribus ducimus dolorem culpa animi beatae tenetur! Sapiente, quia tempora."`,
      title: 'Jhone White',
      subtitle: 'Software Engineer'
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
