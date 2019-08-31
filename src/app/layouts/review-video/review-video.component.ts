import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review-video',
  templateUrl: './review-video.component.html',
  styleUrls: ['./review-video.component.css']
})
export class ReviewVideoComponent implements OnInit {
  video;
  questions;

  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    this.video = this.route.snapshot.data['video'];
    console.log('video>>', this.video);
    this.http.get('assets/questions/mock-questions.json').map(data => data.json()).subscribe(data => {
      this.questions = data;
    });
  }

}
