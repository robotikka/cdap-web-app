import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videos: any[];
  filteredVideos: any[];

  constructor() {
    this.videos = [
      {
        videoTitle: 'OOPLecture 05',
        description: '2018 Object Oreiented Concepts Lecture 05',
        duration: '00:59:09',
        thumbnailUrl: 'assets/images/thumbnails/2018-OOC-Lecture-05.jpg',
        id: '6f27ec0f-2046-473e-85c1-88183d2956c9',
        tags: ['c++', 'classes', 'coding']
      },
      {
        videoTitle: 'OOP Lecture 05',
        description: '2018 Object Oreiented Concepts Lecture 05',
        duration: '01:01:11',
        thumbnailUrl: 'assets/images/thumbnails/2018-OOC-Lecture-06.jpg',
        id: '220131b0-06ba-4353-bd01-fefed272a161',
        tags: ['objects', 'destructors', 'constructors']
      },
      {
        videoTitle: 'OOP Lecture 05',
        description: '2018 Object Oreiented Concepts Lecture 05',
        duration: '00:59:27',
        thumbnailUrl: 'assets/images/thumbnails/2018-OOC-Lecture-07.jpg',
        id: 'f3df3232-32b8-45dd-bee0-fbb2c0953ca6',
        tags: ['relationships', 'classes', 'diagrams']
      }
    ];
    this.filteredVideos = this.videos;
   }

  ngOnInit() {
  }

  search(event){

    // if ('java'.includes('ja')){
    //   console.log(true);
    // }
    this.filteredVideos = [];
    var word = event.target.value;
    // console.log(word);
    if (word === '') {
      this.filteredVideos = this.videos;
    }
    else {
      for (let item of this.videos){
        // console.log(item)
        for (let tag in item.tags){
          if (item.tags[tag].includes(word)){
            console.log(tag+'--'+word);
            this.filteredVideos.push(item);
            break;
          }
        }
      }
    }


  }
}
