import { Component, OnInit } from '@angular/core';
import { VideoDataService } from '../../../../services/video-data.service';

@Component({
  selector: 'app-review-tab',
  templateUrl: './review-tab.component.html',
  styleUrls: ['./review-tab.component.css']
})
export class ReviewTabComponent implements OnInit {

  videos;

  constructor(private videoDataService: VideoDataService) {
    
  }

  ngOnInit() {
    this.getVideos();
  }

  getVideos(): void {
    this.videoDataService.getVideosUpForReview()
      .subscribe(v => this.videos = v);
  }

}
