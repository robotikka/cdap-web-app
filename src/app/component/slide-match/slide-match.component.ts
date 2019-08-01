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
    {id: 157, no: 1, url: '../../../assets/slides/slide1.png'},
    {id: 160, no: 2, url: '../../../assets/slides/slide2.png'},
    {id: 166, no: 3, url: '../../../assets/slides/slide3.png'},
    {id: 1048, no: 4, url: '../../../assets/slides/slide4.png'},
    {id: 1087, no: 5, url: '../../../assets/slides/slide5.png'},
    {id: 1089, no: 6, url: '../../../assets/slides/slide6.png'},
    {id: 1172, no: 7, url: '../../../assets/slides/slide7.png'},
    {id: 2299, no: 8, url: '../../../assets/slides/slide8.png'},
    {id: 2346, no: 9, url: '../../../assets/slides/slide9.png'},
    {id: 2368, no: 10, url: '../../../assets/slides/slide10.png'},
    {id: 3177, no: 11, url: '../../../assets/slides/slide11.png'},
    {id: 3191, no: 12, url: '../../../assets/slides/slide12.png'},
    {id: 3195, no: 13, url: '../../../assets/slides/slide13.png'},
    {id: 3549, no: 14, url: '../../../assets/slides/slide14.png'}];

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

  getTime(time: number, number): void {
    // alert(time);
    this.vpb.seekVideo(time);
    this.currentSlide = number
  }

  setImage(url: any): void {
    alert(url);
  }
}

