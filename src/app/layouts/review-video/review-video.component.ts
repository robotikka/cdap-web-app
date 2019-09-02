import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {VideoDataService} from '../../services/video-data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-review-video',
  templateUrl: './review-video.component.html',
  styleUrls: ['./review-video.component.css']
})
export class ReviewVideoComponent implements OnInit {
  video;
  questions;

  constructor(private http: Http, private route: ActivatedRoute, private modalService: NgbModal,
              private videoDataService: VideoDataService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.video = this.route.snapshot.data['video'];
    console.log('video>>', this.video);
    this.http.get('assets/questions/mock-questions.json').map(data => data.json()).subscribe(data => {
      this.questions = data;
    });
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  publishVideo(){
    this.videoDataService.updateStatus(this.video._id, {'status': 'published'}).subscribe(data =>{
      let json_data = JSON.parse(data);
      if (json_data.status === 200){
          this.router.navigate(['videoplayer/' + this.video.id]);
      } else {
        this.toastr.error('Error', 'Unable to publish the video', {
        timeOut: 3000,
        positionClass: 'toast-bottom-center'
      });
    }
    });
  }

}
