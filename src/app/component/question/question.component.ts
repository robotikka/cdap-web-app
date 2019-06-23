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

  @Output() answerSubmit = new EventEmitter<boolean>();

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

      if (this.answers[form.value.answer].correct === true) {
        alert('correct');
        this.answerSubmit.emit(true);
      } else {
        alert('wrong');
        this.answerSubmit.emit(false);
      }
    }
  }



}
