import { Component, OnInit } from '@angular/core';
import { VideoDataService } from '../../services/video-data.service';
import { ModuleService } from '../../services/module.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  videos;
  modules;

  constructor(private videoDataService: VideoDataService, private moduleService: ModuleService ) { }

  ngOnInit() {
    // this.getVideos();
    this.getVideoMetaData();
    this.getAllModuleData();
  }

  // getVideos(): void {
  //   this.videoDataService.getVideos()
  //     .subscribe(v => this.videos = v);
  // }

  getVideoMetaData(): void {
    this.videoDataService.getAllVideoMetadata('id videoTitle thumbnailUrl description')
      .subscribe(data => {
        this.videos = data;
      });
  }

  getAllModuleData(): void {
    this.moduleService.getAllModules()
      .subscribe(data => {
        this.modules = data;
        console.log(this.modules);
      });
  }

}
