import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-infobar',
  templateUrl: './video-infobar.component.html',
  styleUrls: ['./video-infobar.component.css']
})
export class VideoInfobarComponent implements OnInit {
  @Input() videoTitle: string;
  @Input() videoDescription: string;
  @Input() videoRatingInfo: Object;

  constructor() { }

  ngOnInit() {
  }

}

