import { Component, OnInit, Input } from '@angular/core';
import { VgAPI } from 'videogular2/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  @Input() videoSrc: string;
  @Input() videoType: string;

  private api: VgAPI;

  constructor() { }

  ngOnInit() {
  }

  onPlayerReady(api: VgAPI) {
    this.api = api;

    this.api.getDefaultMedia().subscriptions.pause.subscribe(() => {
      console.log('paused');
    });

    this.api.getDefaultMedia().subscriptions.timeUpdate.subscribe((data) => {
      console.log(data.srcElement.currentTime);
      if (Math.floor(data.srcElement.currentTime) === 5) {
        // console.log('current time fired');
        this.api.getDefaultMedia().pause();
      }
    });
  }

}
