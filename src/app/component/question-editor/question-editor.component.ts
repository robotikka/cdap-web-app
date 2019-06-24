import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-question-editor',
  templateUrl: './question-editor.component.html',
  styleUrls: ['./question-editor.component.css']
})
export class QuestionEditorComponent implements OnInit {
  @Input() questions: any;
  // questions;

  constructor() { }

  ngOnInit() {
  }

  logQuestions() {
    console.log(this.questions);
  }

}
