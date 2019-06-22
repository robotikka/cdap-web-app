import { Component, OnInit } from '@angular/core';
import { VgAPI } from 'videogular2/core';

@Component({
  selector: 'app-video-playback',
  templateUrl: './video-playback.component.html',
  styleUrls: ['./video-playback.component.css']
})
export class VideoPlaybackComponent implements OnInit {
  api: VgAPI;

  constructor() { }

  ngOnInit() {
  }

  // onPlayerReady(api: VgAPI) {
  //   this.api = api;

  //   this.api.getDefaultMedia().subscriptions.pause.subscribe(() => {
  //     console.log('paused');
  //   });

  //   this.api.getDefaultMedia().subscriptions.timeUpdate.subscribe((data) => {
  //     console.log(data.srcElement.currentTime);
  //     if (Math.floor(data.srcElement.currentTime) === 5) {
  //       // console.log('current time fired');
  //       this.api.getDefaultMedia().pause();
  //     }
  //   });
  // }

}
