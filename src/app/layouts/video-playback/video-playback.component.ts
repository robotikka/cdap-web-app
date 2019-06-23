import { Component, OnInit, ViewChild } from '@angular/core';
import { PlayerCurrentTimeService } from '../../services/player-current-time.service';
import { VideoPlayerComponent } from '../../component/video-player/video-player.component';
import { Http } from '@angular/http';

@Component({
  selector: 'app-video-playback',
  templateUrl: './video-playback.component.html',
  styleUrls: ['./video-playback.component.css']
})
export class VideoPlaybackComponent implements OnInit {
  @ViewChild(VideoPlayerComponent) player;

  questions;


  src = 'assets/gravity_falls_opening.mp4';

  currentTime: any;

  constructor(private currentTimeService: PlayerCurrentTimeService, private http: Http) { }

  ngOnInit() {
    this.http.get('assets/questions/mock-questions.json').map(data => data.json()).subscribe(data => {
      this.questions = data;
      console.log(data);
    });


    this.currentTimeService.currentTime.subscribe(time => {
      this.currentTime = time;
    });
  }

  seekVideo() {
    this.player.seekVideo(30);
  }

}
