import { Component, OnInit, Input } from '@angular/core';
import * as short from 'short-uuid';
import { Http } from '@angular/http';
import { VideoDataService } from '../../services/video-data.service';

@Component({
  selector: 'app-question-editor',
  templateUrl: './question-editor.component.html',
  styleUrls: ['./question-editor.component.scss']
})
export class QuestionEditorComponent implements OnInit {
  @Input() videoId: String;
  @Input() questions: any;
  // questions;

  constructor(private videoDataService: VideoDataService) { }

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

  updateQuestions() {
    console.log(this.videoId);
    console.log(this.questions);
    this.videoDataService.updateQuestions(this.videoId, this.questions).subscribe(data => {
      console.log(data);
    });
  }

}
