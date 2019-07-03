import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

const videos = [
  {
    id: '1',
    src: 'assets/gravity_falls_opening.mp4',
    videoTitle: 'Test Video 1',
    description: 'test description long long long very long',
    duration: '12:00',
    thumbnailUrl: 'assets/images/big/img1.jpg',
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
      }]
  },
  {
    id: '2',
    src: 'assets/gravity_falls_opening.mp4',
    videoTitle: 'test title2',
    description: 'test description long long long very long',
    duration: '12:00',
    thumbnailUrl: 'assets/images/big/img1.jpg'
  },
  {
    id: '3',
    src: 'assets/gravity_falls_opening.mp4',
    videoTitle: 'test title3',
    description: 'test description long long long very long',
    duration: '12:00',
    thumbnailUrl: 'assets/images/big/img1.jpg'
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
