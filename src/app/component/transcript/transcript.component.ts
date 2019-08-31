import {Component, Input, OnInit} from '@angular/core';
import {Paragraph} from './paragraph';

@Component({
  selector: 'app-transcript',
  templateUrl: './transcript.component.html',
  styleUrls: ['./transcript.component.scss']
})
export class TranscriptComponent implements OnInit {

  @Input() transcript: Paragraph[];
  @Input() seekVideo: Function;
  @Input() synchronizeTranscript: Function;
  activeTranscriptIndex = 0;
  activeColor = '#009EFD';

  constructor() { }

  ngOnInit() {
    console.log(this.transcript);
    setInterval(() => {this.getCurrentTime(); } , 500);
  }

  onClick(seconds){
    this.seekVideo(seconds)
  }

  getCurrentTime(){
    let time = this.synchronizeTranscript();
    if (time !== -1){
      for (let i = 0; i < this.transcript.length; i++){
        if (this.transcript[i + 1].seconds >= time){
          this.activeTranscriptIndex = i;
          console.log(this.activeTranscriptIndex);
          break;
        }
      }
    }
  }

}
