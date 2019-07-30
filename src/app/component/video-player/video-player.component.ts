import { Component, OnInit, Input } from '@angular/core';
import { VgAPI } from 'videogular2/core';
import { PlayerCurrentTimeService } from '../../services/player-current-time.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  @Input() videoSrc: string;
  @Input() videoType: string;
  @Input() videoToggle: Function;

  private api: VgAPI;

  constructor(private currentTimeService: PlayerCurrentTimeService) { }

  ngOnInit() {
  }

  onPlayerReady(api: VgAPI) {
    this.api = api;

    this.api.getDefaultMedia().subscriptions.pause.subscribe(() => {
      console.log('paused');
    });

    this.api.getDefaultMedia().subscriptions.canPlay.subscribe(() => {
      console.log('Can play the video now');
      this.videoToggle();
    });

    this.api.getDefaultMedia().subscriptions.loadedData.subscribe(() => {
      console.log('Video loaded');
    });

    this.api.getDefaultMedia().subscriptions.timeUpdate.subscribe((data) => {

      // update current time service
      this.currentTimeService.changeTime(Math.floor(data.srcElement.currentTime));

      // console.log(data.srcElement.currentTime);
      // if (Math.floor(data.srcElement.currentTime) === 5) {
      //   // console.log('current time fired');
      //   this.api.getDefaultMedia().pause();
      // }
    });

  }

  seekVideo(time: any) {
    this.api.$$seek(this.api.getDefaultMedia(), time);
  }

}
