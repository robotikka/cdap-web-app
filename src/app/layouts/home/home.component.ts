import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videos: any[];

  constructor() {
    this.videos = [
      {
        videoTitle: 'OOC Lecture 05',
        description: '2018 Object Oreiented Concepts Lecture 05',
        duration: '59:09',
        thumbnailUrl: 'assets/images/thumbnails/2018-OOC-Lecture-05.jpg',
        id: '6f27ec0f-2046-473e-85c1-88183d2956c9'
      },
      {
        videoTitle: 'OOC Lecture 05',
        description: '2018 Object Oreiented Concepts Lecture 05',
        duration: '1:01:11',
        thumbnailUrl: 'assets/images/thumbnails/2018-OOC-Lecture-06.jpg',
        id: '220131b0-06ba-4353-bd01-fefed272a161'
      },
      {
        videoTitle: 'OOC Lecture 05',
        description: '2018 Object Oreiented Concepts Lecture 05',
        duration: '59:27',
        thumbnailUrl: 'assets/images/thumbnails/2018-OOC-Lecture-07.jpg',
        id: 'f3df3232-32b8-45dd-bee0-fbb2c0953ca6'
      }
    ];
   }

  ngOnInit() {
  }

}
