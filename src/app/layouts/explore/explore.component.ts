import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../../services/module.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  videos;
  modules;

  constructor(private moduleService: ModuleService ) { }

  ngOnInit() {
    // this.getVideos();
    this.getAllModuleData();
  }

  // getVideos(): void {
  //   this.videoDataService.getVideos()
  //     .subscribe(v => this.videos = v);
  // }

  getAllModuleData(): void {
    this.moduleService.getAllModules()
      .subscribe(data => {
        this.modules = data;
        console.log(this.modules);
      });
  }

  cardClicked(moduleId) {
    console.log('Card clicked' + moduleId);
  }

}
