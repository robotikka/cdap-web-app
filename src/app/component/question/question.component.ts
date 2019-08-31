import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question: string;
  @Input() answers: [{ id: string, value: string, correct: boolean }];
  @Input() correctAnswer: string;
  @Input() hasMoreQuestions: boolean;
  @Input() hasPrevQuestion: boolean;

  @Output() answerSubmit = new EventEmitter<boolean>();
  @Output() prevQuestion = new EventEmitter<boolean>();

  isSubmitted = false;

  constructor() { }

  ngOnInit() {
  }

  submitForm(form: NgForm) {
    this.isSubmitted = true;
    if (!form.valid) {
      return false;
    } else {
      console.log(form.value);

      if (form.value.answer === this.correctAnswer) {
        alert('correct');
        this.answerSubmit.emit(true);
        form.reset();
        this.isSubmitted = false;
      } else {
        alert('wrong');
        this.answerSubmit.emit(false);
      }
    }
  }

  goToPrevQuestion(form: NgForm) {
    form.reset();
    this.prevQuestion.emit(true);
  }



}
