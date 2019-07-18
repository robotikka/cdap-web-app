import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { VideoDataService } from './video-data.service';

@Injectable()
export class VideoDataResolve implements Resolve<any> {

  constructor(private videoDataService: VideoDataService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.videoDataService.getVideo(route.params['id']);
  }
}
