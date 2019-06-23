import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question-asker',
  templateUrl: './question-asker.component.html',
  styleUrls: ['./question-asker.component.css']
})
export class QuestionAskerComponent implements OnInit {
  @Input() questionCount: string;
  @Input() questions: any;

  private currentQuestionNumber = 1;
  private currentQustion;
  private hasMoreQuestions = false;

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
    this.currentQustion = this.questions[this.currentQuestionNumber - 1];
    console.log(this.currentQustion);
  }

  receiveAnswer($event) {
    this.answer = $event;
    if (this.answer === true) {
      if (this.currentQuestionNumber < +this.questionCount) {
        this.currentQuestionNumber++;
        this.currentQustion = this.questions[this.currentQuestionNumber - 1];
      }
    } else {
      alert('wrong answer try again');
    }
    console.log(this.answer);
  }

}
