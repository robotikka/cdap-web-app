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
  src = 'assets/gravity_falls_opening.mp4';
  currentTime: any;
  public _opened = false;
  videoLoaded = false;

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
    console.log(this.video);

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

  seekVideoTopics(time){
    time = time.split(':');
    var time_in_seconds = parseInt(time[0], 10) * 60 * 60 +  parseInt(time[1], 10) * 60 + parseInt(time[2], 10);
    console.log(time_in_seconds);

    this.player.seekVideo(time_in_seconds);
  }

  toggleSidebar() {
    this._opened = !this._opened;

  }

  toggleVideoLoaded() {
    this.videoLoaded = !this.videoLoaded;
  }

  get getVideoToggleMethod() {
    return this.toggleVideoLoaded.bind(this);
}

}
