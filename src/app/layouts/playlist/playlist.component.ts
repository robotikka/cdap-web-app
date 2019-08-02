import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  videos;

  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {
    this.videos = this.route.snapshot.data['videos'];
    console.log(this.videos);
  }

}
