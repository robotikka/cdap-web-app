import {Component, OnInit, ViewChild, Input} from '@angular/core';
import { PlayerCurrentTimeService } from '../../services/player-current-time.service';
import { VideoPlayerComponent } from '../../component/video-player/video-player.component';
import {VideoDataService} from '../../services/video-data.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-topic-model',
  templateUrl: './topic-model.component.html',
  styleUrls: ['./topic-model.component.css']
})
export class TopicModelComponent implements OnInit {
  @ViewChild(VideoPlayerComponent) player;
  @Input() video;
  hrs: string;
  mins: string;
  seconds: string;
  duration: number;

  src = 'assets/gravity_falls_opening.mp4';

  currentTime: any;

  loading = false;

  primaryColour = '#6610f2';
  secondaryColour = '#b389f9';

  topics = false;
  videoLoaded = false;
  times = [];
  activeIds = [];

  topic_models = [{keywords: ['class', 'object', 'relationships'], time: 10, topic: 'Topic 1'},
    {keywords: ['class', 'inheritance', 'sub-class'], time: 20,  topic: 'Topic 2'},
    {keywords: ['class', 'dependancy', 'sub-class'], time: 30,  topic: 'Topic 3'}];

  constructor(private currentTimeService: PlayerCurrentTimeService, private videoDataService: VideoDataService,
              private toastr: ToastrService, private modalService: NgbModal) { }

  ngOnInit() {
    this.currentTimeService.currentTime.subscribe(time => {
      this.currentTime = time;

    });
    // const video_time = this.video.duration.split(':');
    // this.hrs = video_time[0];
    // this.mins = video_time[1];
    // this.seconds = video_time[2];
    // console.log(this.player.getDuration());

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

  seekVideo(index) {
    this.player.seekVideo(this.hmsToSeconds(index));
  }

  onTimeChange(event, index, type) {
    if (type === 'hrs') {
      this.times[index].hrs = event.target.value;
    } else if (type === 'mins') {
      this.times[index].mins = event.target.value;
    } else {
      this.times[index].secs = event.target.value;
    }
    // this.topic_models[index].time = event.target.value;
  }

  onTopicChange(event, index){
    this.video.topics[index].topic = event.target.value;
  }

  toggleVideoLoaded() {
    this.videoLoaded = true;
    console.log(this.player.getDuration());
    this.secondsToHMS(this.player.getDuration());
    if (this.times.length === 0){
      for (let item of this.video.topics){
        let hms_time = item.time.split(':');
        let time_object = {'hrs': hms_time[0], 'mins': hms_time[1], 'secs': hms_time[2]};
        this.times.push(time_object);
      }
    }
    console.log(this.times);
    // console.log(this.video);

  }

  get getVideoToggleMethod() {
    return this.toggleVideoLoaded.bind(this);
  }

  secondsToHMS(seconds){
    this.duration = Number(seconds);
    let h = Math.floor(this.duration / 3600);
    let m = Math.floor(this.duration % 3600 / 60);
    let s = Math.floor(this.duration % 3600 % 60);
    console.log(h + ':' + m + ':' + s);

  }

  hmsToSeconds(index){
    let seconds = (Number(this.times[index].hrs) * 60 * 60) + (Number(this.times[index].mins) * 60) + Number(this.times[index].secs);
    console.log(seconds);
    return seconds;
  }

  updateTopics(){
    for (let i = 0; i < this.times.length; i++) {
      if (this.times[i].hrs.length < 2) {
        this.times[i].hrs = '0' + this.times[i].hrs;
      }
      if (this.times[i].mins.length < 2) {
        this.times[i].mins = '0' + this.times[i].mins;
      }
      if (this.times[i].secs < 2) {
        this.times[i].secs = '0' + this.times[i].secs;
      }
      let hms = this.times[i].hrs + ':' + this.times[i].mins + ':' + this.times[i].secs;
      this.video.topics[i].time = hms;
    }
    // console.log(this.video.topics);
    let new_topics = {'topics': this.video.topics};
    // console.log(new_topics);
    this.videoDataService.updateTopics(this.video.id, new_topics).subscribe(data =>{
      // console.log(data);
      let json_data = JSON.parse(data);
      if (json_data.status === 200){
        this.toastr.success('Success', 'Topics updated successfully', {
          timeOut: 3000,
          positionClass: 'toast-bottom-right'
        });
        this.activeIds = [];
      } else {
        this.toastr.error('Error', 'Unable to update the topics', {
          timeOut: 3000,
          positionClass: 'toast-bottom-right'
        });
      }
    });
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  addTopic(){
    let new_topic = {'keywords': [], 'time': '00:00:00', 'topic': 'Topic ' + (this.video.topics.length + 1)};
    let time_object = {'hrs': '00', 'mins': '00', 'secs': '00'};
    this.video.topics.push(new_topic);
    console.log(this.video.topics);
    this.times.push(time_object);
  }

  deleteTopic(index){
    this.video.topics.splice(index, 1);
    this.times.splice(index, 1);
    console.log(this.video.topics);
  }
}
