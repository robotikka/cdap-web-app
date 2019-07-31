import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-search-result',
  templateUrl: './video-search-result.component.html',
  styleUrls: ['./video-search-result.component.scss']
})
export class VideoSearchResultComponent implements OnInit {
  @Input() videoTitle: string;
  @Input() description: string;
  @Input() duration: string;
  @Input() thumbnailUrl: string;
  @Input() thumbnailAltText: string;
  @Input() id: string;
  @Input() date: string;

  constructor() { }

  ngOnInit() {
  }

}
