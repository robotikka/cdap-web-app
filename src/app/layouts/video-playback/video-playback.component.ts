import { Component, OnInit, ViewChild } from '@angular/core';
import { PlayerCurrentTimeService } from '../../services/player-current-time.service';
import { VideoPlayerComponent } from '../../component/video-player/video-player.component';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
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

  comments = [{user: 'John Doe', time: 'Wed Jul 31 2019 13:32:39', comment: 'This is the first comment'},
    {user: 'John Doe', time: 'Wed Jul 31 2019 13:32:39', comment: 'This is the second comment'},
    {user: 'John Doe', time: 'Wed Jul 31 2019 13:32:39', comment: 'This is the third comment'}];

  commentCount = this.comments.length;

  myComment = '';

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

  dateConverter(date){
    let commentedDate = new Date(date);
    let currentDate = new Date ();
    let diffMs = (currentDate.getTime() - commentedDate.getTime());
    let diffSec = Math.round((diffMs / 1000));
    let diffDays = Math.floor(diffMs / 86400000); // days
    let diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    let diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
    let weeks = Math.floor(diffMins / (24 * 7 * 60));
    let months = Math.floor(diffMins / (24 * 30 * 60));
    let years = Math.floor(diffMins / (24 * 365 * 60));

    const diffs = [years, months, weeks, diffDays, diffHrs, diffMins, diffSec];
    const units = ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Minutes', 'Seconds'];

    for (let i = 0; i < diffs.length; i++) {
      if (diffs[i] > 0) {
        if (diffs[i] === 1) {
          return(diffs[i] + ' ' + units[i].substring(0, (units[i].length - 1)));
        } else {
          return(diffs[i] + ' ' + units[i]);
        }
      }
    }

  }

  reply(user) {
    this.myComment += ' @' + user;
  }

  toggleVideoLoaded() {
    this.videoLoaded = !this.videoLoaded;
  }

  get getVideoToggleMethod() {
    return this.toggleVideoLoaded.bind(this);
}

}
