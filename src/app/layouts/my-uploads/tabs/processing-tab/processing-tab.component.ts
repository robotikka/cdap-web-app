import { Component, OnInit } from '@angular/core';
import { VideoDataService } from '../../../../services/video-data.service';


@Component({
  selector: 'app-processing-tab',
  templateUrl: './processing-tab.component.html',
  styleUrls: ['./processing-tab.component.css']
})
export class ProcessingTabComponent implements OnInit {

  videos: any[];

  constructor(private videoDataService: VideoDataService) {
  }

  ngOnInit() {
    this.getVideos();
  }

  getVideos(): void {
    this.videoDataService.getVideoByStatus('processing')
      .subscribe(v => this.videos = v);
  }

}
