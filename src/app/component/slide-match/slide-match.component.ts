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
  private currentSlide = 1;
  private noOfSlides = 5;

  product: any[] = [
    {id: 1, url: '../../../assets/slides/frame0001.jpg'},
    {id: 36, url: '../../../assets/slides/frame0036.jpg'},
    {id: 48, url: '../../../assets/slides/frame0048.jpg'},
    {id: 87, url: '../../../assets/slides/frame0087.jpg'},
    {id: 117, url: '../../../assets/slides/frame0117.jpg'},
    {id: 483, url: '../../../assets/slides/frame0483.jpg'}];

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
  }
}

