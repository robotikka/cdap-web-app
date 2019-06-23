import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-processing-tab',
  templateUrl: './processing-tab.component.html',
  styleUrls: ['./processing-tab.component.css']
})
export class ProcessingTabComponent implements OnInit {

  videos: any[];

  constructor() {
    this.videos = [
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
   }

  ngOnInit() {
  }

}
