import { Component, OnInit, Input, AfterViewInit } from '@angular/core'
import * as YTPlayer from 'yt-player'

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements AfterViewInit {
  ngAfterViewInit (): void {
    console.log('#' + this.componentId)
    var player = new YTPlayer('#' + this.componentId, {
      width: 300
    })
    player.load(this.videoId)
    player.setVolume(100)
  }
  @Input() videoId: string
  @Input() componentId: string
  constructor () {}

  ngOnInit () {}
}
