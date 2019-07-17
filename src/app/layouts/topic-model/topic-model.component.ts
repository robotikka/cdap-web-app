import {Component, OnInit, ViewChild} from '@angular/core';
import { PlayerCurrentTimeService } from '../../services/player-current-time.service';
import { VideoPlayerComponent } from '../../component/video-player/video-player.component';


@Component({
  selector: 'app-topic-model',
  templateUrl: './topic-model.component.html',
  styleUrls: ['./topic-model.component.css']
})
export class TopicModelComponent implements OnInit {
  @ViewChild(VideoPlayerComponent) player;

  src = 'assets/gravity_falls_opening.mp4';

  currentTime: any;

  loading = false;

  primaryColour = '#6610f2';
  secondaryColour = '#b389f9';

  topics = false;

  topic_models = [{keywords: ['class', 'object', 'relationships'], time: 10, topic: 'Topic 1'},
    {keywords: ['class', 'inheritance', 'sub-class'], time: 20,  topic: 'Topic 2'},
    {keywords: ['class', 'dependancy', 'sub-class'], time: 30,  topic: 'Topic 3'}];

  constructor(private currentTimeService: PlayerCurrentTimeService) { }

  ngOnInit() {
    this.currentTimeService.currentTime.subscribe(time => {
      this.currentTime = time;

    });
  }

  onLoad() {
    this.loading = true;
    this.topics = false;
    const self = this;
    setTimeout(function () {
      self.topics = true;
      self.loading = false;
    }, 5000);
  }

  seekVideo(time) {
    this.player.seekVideo(time);
  }

  onTimeChange(event, index) {
    this.topic_models[index].time = event.target.value;
  }

}
