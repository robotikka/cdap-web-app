import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';
import { UploadLectureComponent } from './layouts/upload-lecture/upload-lecture.component';
import { MyUploadsComponent } from './layouts/my-uploads/my-uploads.component';
import { VideoPlaybackComponent } from './layouts/video-playback/video-playback.component';
import { HomeComponent } from './layouts/home/home.component';
import {TopicModelComponent} from './layouts/topic-model/topic-model.component';
import {ReviewVideoComponent} from './layouts/review-video/review-video.component';
import { ExploreComponent } from './layouts/explore/explore.component';
import { VideoDataResolve } from './services/video-data.resolve';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './layouts/login/login.component';
import { RegisterComponent } from './layouts/register/register.component';
import { SearchResultsComponent } from './layouts/search-results/search-results.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'component',
        loadChildren: './component/component.module#ComponentsModule'
      },
      {
        path: 'upload',
        component: UploadLectureComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'myuploads',
        component: MyUploadsComponent
      },
      {
        path: 'videoplayer',
        component: VideoPlaybackComponent
      },
      {
        path: 'review-video',
        component: ReviewVideoComponent,
        data: {
          title: 'Review Video'
        }
      },
      {
        path: 'videoplayer/:id',
        component: VideoPlaybackComponent,
        resolve: {
          video: VideoDataResolve
        }
      },
      {
        path: 'explore',
        component: ExploreComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'search',
        component: SearchResultsComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];
