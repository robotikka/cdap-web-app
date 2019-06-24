import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.css']
})
export class VideoThumbnailComponent implements OnInit {
  @Input() videoTitle: string;
  @Input() description: string;
  @Input() duration: string;
  @Input() thumbnailUrl: string;
  @Input() thumbnailAltText: string;
  @Input() reviewBtn: boolean;

  constructor() { }

  ngOnInit() {
  }

}
