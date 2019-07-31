import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentsRoutes } from './component.routing';
import { NgbdpregressbarBasicComponent } from './progressbar/progressbar.component';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAccordionBasicComponent } from './accordion/accordion.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';
import { NgbdCarouselBasicComponent } from './carousel/carousel.component';
import { NgbdDatepickerBasicComponent } from './datepicker/datepicker.component';
import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdModalBasicComponent } from './modal/modal.component';
import { NgbdPopTooltipComponent } from './popover-tooltip/popover-tooltip.component';
import { NgbdratingBasicComponent } from './rating/rating.component';
import { NgbdtabsBasicComponent } from './tabs/tabs.component';
import { NgbdtimepickerBasicComponent } from './timepicker/timepicker.component';
import { NgbdtypeheadBasicComponent } from './typehead/typehead.component';
import { CardsComponent } from './card/card.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { VideoThumbnailComponent } from './video-thumbnail/video-thumbnail.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { QuestionAskerComponent } from './question-asker/question-asker.component';
import { QuestionComponent } from './question/question.component';
import { SlideMatchComponent } from './slide-match/slide-match.component';
import { QuestionEditorComponent } from './question-editor/question-editor.component';
import { InlineEditComponent } from './inline-edit/inline-edit.component';
import { LoginDropdownComponent } from './login-dropdown/login-dropdown.component';
import { ModuleManagerComponent } from './module-manager/module-manager.component';
import { VideoInfobarComponent } from './video-infobar/video-infobar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    NgbModule
  ],
  declarations: [
    NgbdpregressbarBasicComponent,
    NgbdpaginationBasicComponent,
    NgbdAccordionBasicComponent,
    NgbdAlertBasicComponent,
    NgbdCarouselBasicComponent,
    NgbdDatepickerBasicComponent,
    NgbdDropdownBasicComponent,
    NgbdModalBasicComponent,
    NgbdPopTooltipComponent,
    NgbdratingBasicComponent,
    NgbdtabsBasicComponent,
    NgbdtimepickerBasicComponent,
    NgbdtypeheadBasicComponent,
    CardsComponent,
    ButtonsComponent,
    ModuleManagerComponent
  ]
})
export class ComponentsModule {}
