import { Component, OnInit } from '@angular/core';
import { VideoDataService } from '../../services/video-data.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  videos;

  constructor(private videoDataService: VideoDataService) { }

  ngOnInit() {
    this.getVideos();
  }

  getVideos(): void {
    this.videos - this.videoDataService.getVideos()
      .subscribe(v => this.videos = v);;
  }

}
