import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-asker',
  templateUrl: './question-asker.component.html',
  styleUrls: ['./question-asker.component.css']
})
export class QuestionAskerComponent implements OnInit {
  question = 'Which was the first object oriented programming language developed?';
  answers: any[] = [
    {
      id: 'java',
      value: 'Java',
      correct: false
    },
    {
      id: 'c++',
      value: 'C++',
      correct: false
    },
    {
      id: 'smalltalk',
      value: 'SmallTalk',
      correct: true
    },
    {
      id: 'kotlin',
      value: 'Kotlin',
      correct: false
    }
  ];

  answer;

  constructor() { }

  ngOnInit() {
  }

  receiveAnswer($event) {
    this.answer = $event;
    console.log(this.answer);
  }

}
