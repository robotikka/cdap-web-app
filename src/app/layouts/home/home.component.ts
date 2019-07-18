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
        videoTitle: 'C++ Class Coding',
        description: 'This lecture is about basic class coding in C++',
        duration: '00:59:09',
        thumbnailUrl: 'https://cdap-19-087-vtutor-lecturematerials.s3.ap-south-1.amazonaws.com/lec5-thumbnail.jpg',
        tags: ['c++', 'classes', 'coding']
      },
      {
        videoTitle: 'Classes and Objects',
        description: 'Coding using classes and objects in C++',
        duration: '01:01:11',
        thumbnailUrl: 'https://cdap-19-087-vtutor-lecturematerials.s3.ap-south-1.amazonaws.com/lec6-thumbnail.jpg',
        tags: ['c++', 'classes', 'coding', 'objects']
      },
      {
        videoTitle: 'OOP Constructors Destructors',
        description: 'In this lecture we will look at how to work with constructors and destructors',
        duration: '00:59:27',
        thumbnailUrl: 'https://cdap-19-087-vtutor-lecturematerials.s3.ap-south-1.amazonaws.com/lec7-thumbnail.jpg',
        tags: ['objects', 'destructors', 'constructors']
      },
      {
        videoTitle: 'Relationships and Class Diagrams',
        // tslint:disable-next-line:max-line-length
        description: 'Relationships and Class diagrams lecture',
        duration: '00:57:14',
        thumbnailUrl: 'https://cdap-19-087-vtutor-lecturematerials.s3.ap-south-1.amazonaws.com/lec11-thumbnail.jpg',
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
