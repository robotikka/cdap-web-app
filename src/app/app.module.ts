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
import { ToastrModule } from 'ngx-toastr';

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
import { VideoInfobarComponent } from './component/video-infobar/video-infobar.component';
import { CodeEditorComponent } from './component/code-editor/code-editor.component';
import { QuestionAskerComponent } from './component/question-asker/question-asker.component';
import { QuestionComponent } from './component/question/question.component';
import { SlideMatchComponent} from './component/slide-match/slide-match.component';
import { QuestionEditorComponent } from './component/question-editor/question-editor.component';
import { InlineEditComponent } from './component/inline-edit/inline-edit.component';
import { LoginDropdownComponent } from './component/login-dropdown/login-dropdown.component';
import { ModuleManagerComponent } from './component/module-manager/module-manager.component';
import { VideoSearchResultComponent } from './component/video-search-result/video-search-result.component';
import { CommentsComponent } from './component/comments/comments.component';
import { TranscriptComponent} from './component/transcript/transcript.component';

import { PlayerCurrentTimeService } from './services/player-current-time.service';
import { SidebarModule } from 'ng-sidebar';
import { TopicModelComponent } from './layouts/topic-model/topic-model.component';
import { NgxLoadingModule } from 'ngx-loading';
import { HttpModule } from '@angular/http';
import { ReviewVideoComponent } from './layouts/review-video/review-video.component';
import { ExploreComponent } from './layouts/explore/explore.component';
import { VideoDataResolve } from './services/video-data.resolve';
import { VideoDataService } from './services/video-data.service';
import { PlaylistDataResolve } from './services/playlist-data.resolve';

import { ErrorInterceptor } from './helpers/error.interceptor';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { LoginComponent } from './layouts/login/login.component';
import { RegisterComponent } from './layouts/register/register.component';

import { TagInputModule } from 'ngx-chips';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule
 } from '@angular/material';
import { SearchResultsComponent } from './layouts/search-results/search-results.component';
import {UserProfileComponent} from './component/user-profile/user-profile.component';
import { PlaylistComponent } from './layouts/playlist/playlist.component';

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
    VideoInfobarComponent,
    VideoPlaybackComponent,
    ProcessingTabComponent,
    PublishedTabComponent,
    ReviewTabComponent,
    HomeComponent,
    VideoThumbnailComponent,
    VideoPlayerComponent,
    TopicModelComponent,
    VideoPlayerComponent,
    CodeEditorComponent,
    QuestionAskerComponent,
    QuestionComponent,
    SlideMatchComponent,
    QuestionEditorComponent,
    InlineEditComponent,
    ReviewVideoComponent,
    SlideMatchComponent,
    ExploreComponent,
    LoginComponent,
    LoginDropdownComponent,
    RegisterComponent,
    ModuleManagerComponent,
    SearchResultsComponent,
    VideoSearchResultComponent,
    CommentsComponent,
    UserProfileComponent,
    PlaylistComponent,
    TranscriptComponent
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
    NgxLoadingModule.forRoot({}),
    HttpModule,
    Ng2CarouselamosModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    TagInputModule
  ],
  providers: [
    VideoDataService,
    VideoDataResolve,
    PlaylistDataResolve,
    PlayerCurrentTimeService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    ErrorInterceptor,
    JwtInterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
