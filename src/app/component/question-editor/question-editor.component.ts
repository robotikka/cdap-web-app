import { Component, OnInit, Input } from '@angular/core';
const short = require('short-uuid');
import { Http } from '@angular/http';

@Component({
  selector: 'app-question-editor',
  templateUrl: './question-editor.component.html',
  styleUrls: ['./question-editor.component.scss']
})
export class QuestionEditorComponent implements OnInit {
  @Input() questions: any;
  // questions;

  constructor() { }

  ngOnInit() {
    console.log(this.questions);
  }

  deleteQuestion(index) {
    this.questions['questions'].splice(index, 1);
  }

  removeDistractor(questionIndex, distractorIndex) {
    this.questions['questions'][questionIndex]['answers'].splice(distractorIndex, 1);
  }

  addDistractor(questionIndex) {
    const answer = {id: short.generate(), value: ''};
    this.questions['questions'][questionIndex]['answers'].push(answer);
  }

  logQuestions() {
    console.log(this.questions);
  }

}
