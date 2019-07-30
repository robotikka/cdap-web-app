import { Component, OnInit, ViewChild } from '@angular/core';
import { PlayerCurrentTimeService } from '../../services/player-current-time.service';
import { VideoPlayerComponent } from '../../component/video-player/video-player.component';
import { ActivatedRoute } from '@angular/router';
import { VideoDataService } from '../../services/video-data.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-video-playback',
  templateUrl: './video-playback.component.html',
  styleUrls: ['./video-playback.component.css']
})
export class VideoPlaybackComponent implements OnInit {
  @ViewChild(VideoPlayerComponent) player;

  video;
  videoTitle = 'Video Title OOP concepts Lecture 2';
  videoDescription = 'Raw denim you probably havent heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth' +
  ' master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh' +
  'dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum' +
  'iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.';
  src = 'assets/gravity_falls_opening.mp4';

  currentTime: any;

  public _opened = false;

  topics = [{ topic: 'Topic 1', time: 1 },
  { topic: 'Topic 2', time: 10 },
  { topic: 'Topic 3', time: 20 }];

  selected = this.topics[0];

  constructor(
    private route: ActivatedRoute,
    private currentTimeService: PlayerCurrentTimeService,
    private http: Http
    ) { }

  ngOnInit() {
    this.video = this.route.snapshot.data['video'];

    this.currentTimeService.currentTime.subscribe(time => {
      this.currentTime = time;
    });
  }

  get getSeekFunction() {
    return this.seekVideo.bind(this);
  }

  seekVideo(time) {
    this.player.seekVideo(time);
  }

  toggleSidebar() {
    this._opened = !this._opened;

  }

}
