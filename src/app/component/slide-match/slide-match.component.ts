import {Component, OnInit, ViewChild} from '@angular/core';
import { VideoPlayerComponent } from '../video-player/video-player.component';

@Component({
  selector: 'app-slide-match',
  templateUrl: './slide-match.component.html',
  styleUrls: ['./slide-match.component.css']
})
export class SlideMatchComponent implements OnInit {
  @ViewChild(VideoPlayerComponent) player;

  product: any[] = [
    {id: 1, url: '../../../assets/slides/frame0001.jpg'},
    {id: 36, url: '../../../assets/slides/frame0036.jpg'},
    {id: 48, url: '../../../assets/slides/frame0048.jpg'},
    {id: 87, url: '../../../assets/slides/frame0087.jpg'},
    {id: 117, url: '../../../assets/slides/frame0117.jpg'},
    {id: 483, url: '../../../assets/slides/frame0483.jpg'}];

  constructor() { }

  ngOnInit() {
  }

  getTime(id: number): void {
    this.player.seekVideo(id);
  }
}
