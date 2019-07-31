import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { VideoDataService } from '../../services/video-data.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  searchResults1 = [
    {
        'questions': {
            'questions': []
        },
        'date': '27 July 2019',
        'tags': [],
        'slides': [],
        'code': [
            '[object Object],[object Object]'
        ],
        'topics': [
            '[object Object],[object Object],[object Object]'
        ],
        'duration': '56:00',
        'comments': [],
        '_id': '5d4017701c9d440000fc8665',
        'id': 'a2d60977-8ffb-45d5-8353-80ba5fe445ef',
        ' ': 'OOC Lecture 5',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'video_url': 'https://cdap-19-087-vtutor-lecturematerials.s3.ap-south-1.amazonaws.com/a2d60977-8ffb-45d5-8353-80ba5fe445ef/2018-OOC-Lecture-05.mp4',
        'thumbnailUrl': 'https://cdap-19-087-vtutor-lecturematerials.s3.ap-south-1.amazonaws.com/a2d60977-8ffb-45d5-8353-80ba5fe445ef/thumbnail/thumbnail.jpg'
    },
    {
        'questions': {
            'questions': []
        },
        'date': '27 July 2019',
        'tags': [],
        'slides': [],
        'code': [],
        'topics': [],
        'comments': [],
        '_id': '5d4103d61c9d4400004f25c0',
        'id': '8de7982b-6cb5-43a4-afeb-f5cf211f9809',
        'thumbnailUrl': 'https://cdap-19-087-vtutor-lecturematerials.s3.ap-south-1.amazonaws.com/8de7982b-6cb5-43a4-afeb-f5cf211f9809/thumbnail/thumbnail.jpg',
        'video_url': 'https://cdap-19-087-vtutor-lecturematerials.s3.ap-south-1.amazonaws.com/8de7982b-6cb5-43a4-afeb-f5cf211f9809/2018-OOC-Lecture-06.mp4',
        'videoTitle': 'OOC Lecture 6',
        'description': '2018 OOC Lecture 6 - Dr Nuwan Kodagoda'
    },
    {
        'questions': {
            'questions': []
        },
        'date': '27 July 2019',
        'tags': [],
        'slides': [],
        'code': [],
        'topics': [],
        'comments': [],
        '_id': '5d4105171c9d4400004f25c1',
        'id': 'cdd36673-8add-4f5d-a7fa-86306cadda6d',
        'video_url': 'https://cdap-19-087-vtutor-lecturematerials.s3.ap-south-1.amazonaws.com/cdd36673-8add-4f5d-a7fa-86306cadda6d/2018-OOC-Lecture-07.mp4',
        'thumbnailUrl': 'https://cdap-19-087-vtutor-lecturematerials.s3.ap-south-1.amazonaws.com/cdd36673-8add-4f5d-a7fa-86306cadda6d/thumbnail/thumbnail.jpg',
        'videoTitle': 'OOC Lecture 7',
        'description': '2018 OOC Lecture 7 - Dr Nuwan Kodagoda'
    }
];

  searchResults;
  // tslint:disable-next-line: no-inferrable-types
  searching: boolean = true;

  constructor(
      private route: ActivatedRoute,
      private videoDataService: VideoDataService
    ) { }

  ngOnInit() {
    this.searching = true;
    console.log('init');
    const searchKey = this.route.snapshot.paramMap.get('s');
    this.videoDataService
      .searchVideo(
        searchKey,
        'thumbnailUrl video_url duration date id _id videoTitle description'
      )
      .subscribe(data => {
        console.log(data);
        this.searchResults = data;
        this.searching = false;
      });
  }

}
