import { Component, AfterViewInit, EventEmitter, Output } from '@angular/core';
import {
  NgbModal,
  ModalDismissReasons,
  NgbPanelChangeEvent,
  NgbCarouselConfig
} from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements AfterViewInit {
  @Output() toggleSidebar = new EventEmitter<void>();

  private loggedIn = false;
  searchKey: string;

  public config: PerfectScrollbarConfigInterface = {};
  constructor(
    private modalService: NgbModal,
    public authService: AuthenticationService,
    public router: Router
  ) {
    console.log(this.authService.currentUserValue);
  }

  public showSearch = false;

  ngAfterViewInit() {}

  searchLecture() {
    if (this.searchKey) {
      this.router.navigate(['/search', this.searchKey]);
      this.searchKey = '';
    }
  }
}
