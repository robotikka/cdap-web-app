import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  videos;
  module;

  constructor( private route: ActivatedRoute, private _location: Location ) { }

  ngOnInit() {
    this.videos = this.route.snapshot.data['moduleData'].videos;
    this.module = this.route.snapshot.data['moduleData'].module;
    console.log(this.videos);
    console.log(this.module);
  }

  backClicked() {
    this._location.back();
  }

}
