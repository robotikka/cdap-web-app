import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

import { NavigationComponent } from './shared/header-navigation/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';

import { ArchwizardModule } from 'angular-archwizard';
import { FileDropModule } from 'ngx-file-drop';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

// videogular
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';

import { UploadLectureComponent } from './layouts/upload-lecture/upload-lecture.component';
import { MyUploadsComponent } from './layouts/my-uploads/my-uploads.component';
import { VideoPlaybackComponent } from './layouts/video-playback/video-playback.component';
import { ProcessingTabComponent } from './layouts/my-uploads/tabs/processing-tab/processing-tab.component';
import { PublishedTabComponent } from './layouts/my-uploads/tabs/published-tab/published-tab.component';
import { ReviewTabComponent } from './layouts/my-uploads/tabs/review-tab/review-tab.component';
import { HomeComponent } from './layouts/home/home.component';

import { VideoThumbnailComponent } from './component/video-thumbnail/video-thumbnail.component';
import { VideoPlayerComponent } from './component/video-player/video-player.component';
import { CodeEditorComponent } from './component/code-editor/code-editor.component';
import { QuestionAskerComponent } from './component/question-asker/question-asker.component';
import { QuestionComponent } from './component/question/question.component';
import { SlideMatchComponent} from './component/slide-match/slide-match.component';

import { PlayerCurrentTimeService } from './services/player-current-time.service';
import { SidebarModule } from 'ng-sidebar';
import { HttpModule } from '@angular/http';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true
};

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    FullComponent,
    NavigationComponent,
    BreadcrumbComponent,
    SidebarComponent,
    UploadLectureComponent,
    MyUploadsComponent,
    VideoPlaybackComponent,
    ProcessingTabComponent,
    PublishedTabComponent,
    ReviewTabComponent,
    HomeComponent,
    VideoThumbnailComponent,
    VideoPlaybackComponent,
    VideoPlayerComponent,
    CodeEditorComponent,
    QuestionAskerComponent,
    QuestionComponent,
    SlideMatchComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(Approutes),
    PerfectScrollbarModule,
    ArchwizardModule,
    FileDropModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    SidebarModule.forRoot(),
    HttpModule,
    Ng2CarouselamosModule
  ],
  providers: [
    PlayerCurrentTimeService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
