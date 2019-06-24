import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-review-video',
  templateUrl: './review-video.component.html',
  styleUrls: ['./review-video.component.css']
})
export class ReviewVideoComponent implements OnInit {
  questions;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('assets/questions/mock-questions.json').map(data => data.json()).subscribe(data => {
      this.questions = data;
    });
  }

}
