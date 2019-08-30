import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question-asker',
  templateUrl: './question-asker.component.html',
  styleUrls: ['./question-asker.component.css']
})
export class QuestionAskerComponent implements OnInit {
  @Input() questionCount: string;
  @Input() questions: any;

  public currentQuestionNumber = 1;
  public currentQuestion;
  public hasMoreQuestions: boolean;
  public hasPrevQuestions: boolean;

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
    this.calcHasMoreQuestions();
    this.calcHasPrevQuestions();
    this.setCurrentQuestion();
    console.log('questionasker>>', this.currentQuestion);
  }

  receiveAnswer($event) {
    this.answer = $event;
    if (this.answer === true) {
      if (this.currentQuestionNumber < +this.questionCount) {
        this.currentQuestionNumber++;
        this.setCurrentQuestion();
        this.calcHasMoreQuestions();
        this.calcHasPrevQuestions();
      }
    }
    console.log(this.answer);
  }

  goToPrevQuestion($event) {
    if ($event === true) {
      if (this.currentQuestionNumber > 1) {
        this.currentQuestionNumber--;
        this.setCurrentQuestion();
        this.calcHasMoreQuestions();
        this.calcHasPrevQuestions();
      }
    }
  }

  setCurrentQuestion() {
    this.currentQuestion = this.questions[this.currentQuestionNumber - 1];
  }

  calcHasMoreQuestions() {
    if (this.currentQuestionNumber === +this.questionCount) {
      this.hasMoreQuestions = false;
    } else {
      this.hasMoreQuestions = true;
    }
  }

  calcHasPrevQuestions() {
    if (this.currentQuestionNumber > 1) {
      this.hasPrevQuestions = true;
    } else {
      this.hasPrevQuestions = false;
    }
  }

}
