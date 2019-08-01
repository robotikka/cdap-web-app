import {Component, OnInit, ViewChild} from '@angular/core';
import { VideoPlayerComponent } from '../video-player/video-player.component';
import {VideoPlaybackComponent} from '../../layouts/video-playback/video-playback.component';

@Component({
  selector: 'app-slide-match',
  templateUrl: './slide-match.component.html',
  styleUrls: ['./slide-match.component.css']
})
export class SlideMatchComponent implements OnInit {
  @ViewChild(VideoPlayerComponent) player;
  public currentSlide = 1;
  public noOfSlides = 6;

  product: any[] = [
    {id: 157, no: 1, url: '../../../assets/slides/frame0001.jpg'},
    {id: 160, no: 2, url: '../../../assets/slides/frame0036.jpg'},
    {id: 166, no: 3, url: '../../../assets/slides/frame0048.jpg'},
    {id: 1048, no: 4, url: '../../../assets/slides/frame0087.jpg'},
    {id: 1087, no: 5, url: '../../../assets/slides/frame0117.jpg'},
    {id: 1089, no: 6, url: '../../../assets/slides/frame0483.jpg'},
    {id: 1172, no: 1, url: '../../../assets/slides/frame0001.jpg'},
    {id: 2299, no: 2, url: '../../../assets/slides/frame0036.jpg'},
    {id: 2346, no: 3, url: '../../../assets/slides/frame0048.jpg'},
    {id: 2368, no: 4, url: '../../../assets/slides/frame0087.jpg'},
    {id: 3177, no: 5, url: '../../../assets/slides/frame0117.jpg'},
    {id: 3191, no: 6, url: '../../../assets/slides/frame0483.jpg'},
    {id: 3195, no: 5, url: '../../../assets/slides/frame0117.jpg'},
    {id: 3549, no: 6, url: '../../../assets/slides/frame0483.jpg'}];

  images: Array<any> = [];

  constructor(private vpb: VideoPlaybackComponent) {
    // this.images = [
    //   { name: '../../../assets/slides/frame0001.jpg/' },
    //   { name: '../../../assets/slides/frame0036.jpg' },
    //   { name: '../../../assets/slides/frame0048.jpg' },
    //   { name: '../../../assets/slides/frame0087.jpg' }
    // ];
  }

  ngOnInit() {
  }

  getTime(time: number): void {
    // alert(time);
    this.vpb.seekVideo(time);
  }

  setImage(url: any): void {
    alert(url);
  }
}

