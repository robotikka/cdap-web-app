import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

let videos = [
  {
    id: '1',
    videoTitle: 'test title1',
    description: 'test description long long long very long',
    duration: '12:00',
    thumbnailUrl: 'assets/images/big/img1.jpg'
  },
  {
    id: '2',
    videoTitle: 'test title2',
    description: 'test description long long long very long',
    duration: '12:00',
    thumbnailUrl: 'assets/images/big/img1.jpg'
  },
  {
    id: '3',
    videoTitle: 'test title3',
    description: 'test description long long long very long',
    duration: '12:00',
    thumbnailUrl: 'assets/images/big/img1.jpg'
  },
  {
    id: '4',
    videoTitle: 'test title4',
    // tslint:disable-next-line:max-line-length
    description: 'test description long',
    duration: '12:00',
    thumbnailUrl: 'assets/images/big/img1.jpg'
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
  getVideo(id) {
    return Observable.create(observer => {
      setTimeout(() => {
        observer.next(videos.find((video) => video.id === id))
        observer.complete();
      }, 0);
    });
  }
}

