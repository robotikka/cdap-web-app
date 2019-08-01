import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoDataService } from '../../services/video-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videos: any[];
  filteredVideos: any[];

  searchKey: string;

  constructor(private router: Router, private videoDataService: VideoDataService, ) {
  }

  ngOnInit() {
    this.getVideoMetaData();
  }

  getVideoMetaData(): void {
    this.videoDataService.getAllVideoMetadata('id videoTitle thumbnailUrl description')
      .subscribe(data => {
        this.videos = data;
        this.filteredVideos = data;
      });
  }

  search(event) {

    // if ('java'.includes('ja')){
    //   console.log(true);
    // }
    this.filteredVideos = [];
    var word = event.target.value;
    // console.log(word);
    if (word === '') {
      this.filteredVideos = this.videos;
    } else {
      for (let item of this.videos) {
        // console.log(item)
        for (let tag in item.tags) {
          if (item.tags[tag].includes(word)) {
            console.log(tag + '--' + word);
            this.filteredVideos.push(item);
            break;
          }
        }
      }
    }


  }

  searchLecture() {
    if (this.searchKey) {
      this.router.navigate(['/search', this.searchKey]);
    }
  }
}
