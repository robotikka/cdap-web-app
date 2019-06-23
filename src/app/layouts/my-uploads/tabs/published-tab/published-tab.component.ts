import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-published-tab',
  templateUrl: './published-tab.component.html',
  styleUrls: ['./published-tab.component.css']
})
export class PublishedTabComponent implements OnInit {

  videos: any[];

  constructor() {
    this.videos = [
      {
        videoTitle: 'test title1',
        description: 'test description long long long very long',
        duration: '12:00',
        thumbnailUrl: 'assets/images/big/img1.jpg'
      },
      {
        videoTitle: 'test title2',
        description: 'test description long long long very long',
        duration: '12:00',
        thumbnailUrl: 'assets/images/big/img1.jpg'
      },
      {
        videoTitle: 'test title3',
        description: 'test description long long long very long',
        duration: '12:00',
        thumbnailUrl: 'assets/images/big/img1.jpg'
      },
      {
        videoTitle: 'test title4',
        // tslint:disable-next-line:max-line-length
        description: 'test description long long long very long test description long long long very long test description long long long very long test description long long long very long',
        duration: '12:00',
        thumbnailUrl: 'assets/images/big/img1.jpg'
      }
    ];
  }

  ngOnInit() {
  }

}
