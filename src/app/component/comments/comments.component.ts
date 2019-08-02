import {Component, Input, OnInit} from '@angular/core';
import { VideoDataService } from '../../services/video-data.service';
import {CommentsService} from '../../services/comments.service';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() video: any;
  user: any;
  commentCount = 0;

  myComment = '';
  constructor(
    private commentsService: CommentsService,
    private authService: AuthenticationService,
    private videoDataService: VideoDataService,
  ) { }

  ngOnInit() {
    this.user = this.authService.currentUserValue;
    this.commentCount = this.video.comments.length;
  }

  dateConverter(date){
    let commentedDate = new Date(date);
    let currentDate = new Date ();
    let diffMs = (currentDate.getTime() - commentedDate.getTime());
    let diffSec = Math.round((diffMs / 1000));
    let diffDays = Math.floor(diffMs / 86400000); // days
    let diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    let diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
    let weeks = Math.floor(diffMins / (24 * 7 * 60));
    let months = Math.floor(diffMins / (24 * 30 * 60));
    let years = Math.floor(diffMins / (24 * 365 * 60));

    const diffs = [years, months, weeks, diffDays, diffHrs, diffMins, diffSec];
    const units = ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Minutes', 'Seconds'];

    for (let i = 0; i < diffs.length; i++) {
      if (diffs[i] > 0) {
        if (diffs[i] === 1) {
          return(diffs[i] + ' ' + units[i].substring(0, (units[i].length - 1)));
        } else {
          return(diffs[i] + ' ' + units[i]);
        }
      }
    }

  }

  postComment(): void {

    let username = this.user.username;
    const comment_object = {comment: this.myComment, user: username, date: new Date().toString(), picUrl: this.user.profilePictureUrl};
    this.commentsService.updateComment(this.video._id, comment_object).subscribe(data => {
      this.myComment = '';
      this.videoDataService.getVideo(this.video.id).subscribe(video => {
        console.log(video);
        this.video = video;
        this.commentCount = this.video.comments.length;
      });

    });
  }

  cancel() {
    this.myComment = '';
  }

  reply(user) {
    this.myComment += ' @' + user;
  }

}
