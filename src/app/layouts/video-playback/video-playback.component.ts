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

  questions;
  video;


  src = 'assets/gravity_falls_opening.mp4';

  currentTime: any;

  private _opened = false;

  topics = [{topic: 'Topic 1', time: 1},
            {topic: 'Topic 2', time: 10},
            {topic: 'Topic 3', time: 20}];

  selected = this.topics[0];

  constructor(private route: ActivatedRoute, 
    private currentTimeService: PlayerCurrentTimeService, private http: Http) { }

  ngOnInit() {

    this.video = this.route.snapshot.data['video'];
    console.log(this.video);

    this.http.get('assets/questions/mock-questions.json').map(data => data.json()).subscribe(data => {
      this.questions = data;
      console.log(data);
    });


    this.currentTimeService.currentTime.subscribe(time => {
      this.currentTime = time;
    });
  }

  get getSeekFunction() {
    return this.seekVideo.bind(this);
  }

  seekVideo(time) {
    time = time.split(':');
    var time_in_seconds = parseInt(time[0], 10) * 60 * 60 +  parseInt(time[1], 10) * 60 + parseInt(time[2], 10);
    console.log(time_in_seconds);

    this.player.seekVideo(time_in_seconds);
  }

  toggleSidebar() {
    this._opened = !this._opened;

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
