import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

const videos = [
  {
    id: '6f27ec0f-2046-473e-85c1-88183d2956c9',
    src: 'assets/videos/2018-OOC-Lecture-05.mp4',
    videoTitle: 'OOC Lecture 05',
    description: '2018 Object Oreiented Concepts Lecture 05',
    duration: '59:09',
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
      }],
    questions: {
      count: 4,
      questions: [
        {
          questionNo: 1,
          questionBody: 'What is the term used to indicate the variable and constants of a class?',
          answers: [
            {
              id: 'a',
              value: 'Data members',
              correct: true
            },
            {
              id: 'b',
              value: 'Variables of class',
              correct: false
            },
            {
              id: 'c',
              value: 'Data characters',
              correct: false
            },
            {
              id: 'd',
              value: 'Constants',
              correct: false
            }
          ]
        },
        {
          questionNo: 2,
          questionBody: 'Data members ________________ (C++)',
          answers: [
            {
              id: 'a',
              value: 'Can be initialized with declaration in classes',
              correct: false
            },
            {
              id: 'b',
              value: 'Can be initialized only with help of constructors',
              correct: true
            },
            {
              id: 'c',
              value: 'Can be initialized either in declaration or by constructor',
              correct: false
            },
            {
              id: 'd',
              value: 'Can’t be initialized',
              correct: false
            }
          ]
        },
        {
          questionNo: 3,
          questionBody: 'Which among the following is true for data members?',
          answers: [
            {
              id: 'a',
              value: 'Private data members can be initialized with declaration in classava',
              correct: false
            },
            {
              id: 'b',
              value: 'Static members are initialized in constructors',
              correct: false
            },
            {
              id: 'c',
              value: 'Protected data members can be initialized in class directly',
              correct: false
            },
            {
              id: 'd',
              value: 'Static data members are defined outside class, not in constructortlin',
              correct: true
            }
          ]
        },
        {
          questionNo: 4,
          questionBody: ' How to access data members of a class?',
          answers: [
            {
              id: 'a',
              value: 'Dot operator',
              correct: false
            },
            {
              id: 'b',
              value: 'Arrow operator',
              correct: false
            },
            {
              id: 'c',
              value: 'Dot or arrow as required',
              correct: true
            },
            {
              id: 'd',
              value: 'Dot, arrow or direct call',
              correct: false
            }
          ]
        },
        {
          questionNo: 5,
          questionBody: 'The static member functions can only use ________',
          answers: [
            {
              id: 'a',
              value: 'Static data members',
              correct: true
            },
            {
              id: 'b',
              value: ' Private data members',
              correct: false
            },
            {
              id: 'c',
              value: 'Protected data members',
              correct: false
            },
            {
              id: 'd',
              value: 'Constant data members',
              correct: false
            }
          ]
        },
        {
          questionNo: 6,
          questionBody: 'A class can have self-referential data members',
          answers: [
            {
              id: 'a',
              value: 'True',
              correct: false
            },
            {
              id: 'b',
              value: 'False',
              correct: true
            }
          ]
        },
        {
          questionNo: 7,
          questionBody: 'What is the keyword used to make data members have same value?',
          answers: [
            {
              id: 'a',
              value: 'static',
              correct: false
            },
            {
              id: 'b',
              value: 'const',
              correct: true
            },
            {
              id: 'c',
              value: 'double',
              correct: false
            },
            {
              id: 'd',
              value: 'abstract',
              correct: false
            }
          ]
        },
        {
          questionNo: 8,
          questionBody: 'Which among the following is not allowed for data member declaration?',
          answers: [
            {
              id: 'a',
              value: 'int a;',
              correct: false
            },
            {
              id: 'b',
              value: 'static int a;',
              correct: false
            },
            {
              id: 'c',
              value: 'abstract a;',
              correct: true
            },
            {
              id: 'd',
              value: 'Boolean a;',
              correct: false
            }
          ]
        },
      ]
    }
  },
  {
    id: '220131b0-06ba-4353-bd01-fefed272a161',
    src: 'assets/videos/2018-OOC-Lecture-06.mp4',
    videoTitle: 'OOC Lecture 06',
    description: '2018 Object Oreiented Concepts Lecture 06',
    duration: '1:01:11',
    thumbnailUrl: 'assets/images/big/img1.jpg'
  },
  {
    id: 'f3df3232-32b8-45dd-bee0-fbb2c0953ca6',
    src: 'assets/videos/2018-OOC-Lecture-07.mp4',
    videoTitle: 'OOC Lecture 07',
    description: '2018 Object Oreiented Concepts Lecture 07',
    duration: '59:27',
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
