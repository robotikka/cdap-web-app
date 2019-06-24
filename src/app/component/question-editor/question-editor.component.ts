import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-question-editor',
  templateUrl: './question-editor.component.html',
  styleUrls: ['./question-editor.component.css']
})
export class QuestionEditorComponent implements OnInit {
  questions;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('assets/questions/mock-questions.json').map(data => data.json()).subscribe(data => {
      this.questions = data;
    });
  }

  logQuestions() {
    console.log(this.questions);
  }

}
