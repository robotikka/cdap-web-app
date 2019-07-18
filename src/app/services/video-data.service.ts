import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

const videos = [
  {
    id: '1',
    src: 'https://cdap-19-087-vtutor-lecturematerials.s3.ap-south-1.amazonaws.com/2018-OOC-Lecture-05.mp4',
    videoTitle: 'C++ Class Coding',
    description: 'This lecture is about basic class coding in C++',
    duration: '00:59:09',
    thumbnailUrl: 'https://cdap-19-087-vtutor-lecturematerials.s3.ap-south-1.amazonaws.com/lec5-thumbnail.jpg',
    code: [
      {
        lines: [
          {
            content: 'import java.util.*;',
            timestamp: '0:01:55',
            seconds: 115
          },
          {
            content: 'class Main {',
            timestamp: '0:00:05',
            seconds: 5
          },
          {
            content: 'public static void main(String[] args) {',
            timestamp: '0:00:05',
            seconds: 5
          },
          {
            content: 'Collection<Integer> myList = new ArrayList<Integer>();',
            timestamp: '0:03:40',
            seconds: 220
          },
          {
            content: 'myList.add(10);',
            timestamp: '0:03:15',
            seconds: 195
          },
          {
            content: 'myList.add(20);',
            timestamp: '0:04:05',
            seconds: 245
          },
          {
            content: 'myList.add(30);',
            timestamp: '0:03:15',
            seconds: 195
          },
          {
            content: 'myList.add(50);',
            timestamp: '0:05:20',
            seconds: 320
          },
          {
            content: 'System.out.println("element at index 1 = " + myList.get(1));',
            timestamp: '0:06:55',
            seconds: 415
          },
          {
            content: 'for (Integer var : myList)',
            timestamp: '0:04:20',
            seconds: 260
          },
          {
            content: 'System.out.println(var);',
            timestamp: '0:05:25',
            seconds: 325
          },
          {
            content: 'ArrayList l1 = new ArrayList();',
            timestamp: '0:07:00',
            seconds: 420
          },
          {
            content: 'ArrayList<Integer> l2 = new ArrayList<Integer>();',
            timestamp: '0:08:55',
            seconds: 535
          },
          {
            content: 'ArrayList<Integer> l3 = new ArrayList();',
            timestamp: '0:08:55',
            seconds: 535
          },
          {
            content: 'Collection l4 = new ArrayList();',
            timestamp: '0:08:55',
            seconds: 535
          },
          {
            content: 'Collection<Integer> l5 = new ArrayList<Integer>();',
            timestamp: '0:08:25',
            seconds: 505
          },
          {
            content: 'Collection<Integer> l6 = new ArrayList();',
            timestamp: '0:08:55',
            seconds: 535
          },
          {
            content: 'List l7 = new ArrayList();',
            timestamp: '0:08:55',
            seconds: 535
          },
          {
            content: 'List<Integer> l8 = new ArrayList<Integer>();',
            timestamp: '0:08:55',
            seconds: 535
          },
          {
            content: 'List<Integer> l9 = new ArrayList();',
            timestamp: '0:08:55',
            seconds: 535
          }
        ],
        title: 'Main.java'
      }],
    topics: [
      {
        title: 'Public and Private attributes',
        time: '00:02:33'
      },
      {
        title: 'Activity 1',
        time: '00:19:31'
      },
      {
        title: 'Creating Objects',
        time: '00:38:19'
      }
    ]
  },
  {
    id: '2',
    src: 'https://cdap-19-087-vtutor-lecturematerials.s3.ap-south-1.amazonaws.com/2018-OOC-Lecture-06.mp4',
    videoTitle: 'Classes and Objects',
    description: 'Coding using classes and objects in C++',
    duration: '01:01:11',
    thumbnailUrl: 'https://cdap-19-087-vtutor-lecturematerials.s3.ap-south-1.amazonaws.com/lec6-thumbnail.jpg',
    topics: [
      {
        title: 'Classes and Objects',
        time: '00:03:37'
      },
      {
        title: 'Setters and Getters',
        time: '00:08:32'
      },
      {
        title: 'Exercise 1',
        time: '00:13:43'
      },
      {
        title: 'Exercise 2',
        time: '00:26:34'
      },
      {
        title: 'Clienr Program',
        time: '00:30:22'
      }
    ]
  },
  {
    id: '3',
    src: 'https://cdap-19-087-vtutor-lecturematerials.s3.ap-south-1.amazonaws.com/2018-OOC-Lecture-07.mp4',
    videoTitle: 'OOP Constructors Destructors',
    description: 'In this lecture we will look at how to work with constructors and destructors',
    duration: '00:59:27',
    thumbnailUrl: 'https://cdap-19-087-vtutor-lecturematerials.s3.ap-south-1.amazonaws.com/lec7-thumbnail.jpg',
    topics: [
      {
        title: 'Overloading functions',
        time: '00:02:37'
      },
      {
        title: 'Constructors',
        time: '00:18:30'
      },
      {
        title: 'Exercise 1',
        time: '00:25:58'
      },
      {
        title: 'Exercise 2',
        time: '00:36:28'
      },
      {
        title: 'Destructors',
        time: '00:42:59'
      }]
  },
  {
    id: '4',
    src: 'assets/gravity_falls_opening.mp4',
    videoTitle: 'test title4',
    // tslint:disable-next-line:max-line-length
    description: 'test description long',
    duration: '12:00',
    thumbnailUrl: 'assets/images/big/img1.jpg'
  }
];
const reviewVideos = [
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
const processingVideos = [
  {
    videoTitle: 'Video 001',
    options: ['match slides', 'match code']
  },
  {
    videoTitle: 'Video 002',
    options: ['match slides']
  },
  {
    videoTitle: 'Video 003',
    options: ['match slides', 'match code']
  },
  {
    videoTitle: 'Video 004',
    options: ['denoise', 'match code']
  }
];

@Injectable({
  providedIn: 'root'
})
export class VideoDataService {

  constructor() { }

  getVideos() {
    return Observable.create(observer => {
      observer.next(videos);
    });
  }

  getVideosUpForReview() {
    return Observable.create(observer => {
      observer.next(reviewVideos);
    });
  }

  getProcessingVideos() {
    return Observable.create(observer => {
      observer.next(processingVideos);
    });
  }

  getVideo(id) {
    return Observable.create(observer => {
      setTimeout(() => {
        observer.next(videos.find((video) => video.id === id));
        observer.complete();
      }, 0);
    });
  }
}
