import { Component, OnInit } from '@angular/core';
import { VideoDataService } from '../../../../services/video-data.service';


@Component({
  selector: 'app-published-tab',
  templateUrl: './published-tab.component.html',
  styleUrls: ['./published-tab.component.css']
})
export class PublishedTabComponent implements OnInit {

  videos: any[];

  constructor(private videoDataService: VideoDataService) {

  }

  ngOnInit() {
    this.getVideos();
  }

  getVideos(): void {
    this.videoDataService.getVideos()
      .subscribe(v => this.videos = v);
  }

}
