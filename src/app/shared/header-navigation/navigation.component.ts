import { Component, AfterViewInit, EventEmitter, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
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
export class NavigationComponent implements AfterViewInit, OnInit, OnChanges {
  @Output() toggleSidebar = new EventEmitter<void>();

  private loggedIn = false;
  searchKey: string;
  currentUser: any;
  imageSrc = '';

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

  ngOnInit() {
    this.currentUser = this.authService.currentUserValue;
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    console.log('onChanges() called');
  }

  searchLecture() {
    if (this.searchKey) {
      this.router.navigate(['/search', this.searchKey]);
      this.searchKey = '';
    }
  }

  loadUserData(data) {
    console.log('loadinguserdata');
    this.currentUser = this.authService.currentUserValue;
    this.imageSrc = data;
    console.log(this.authService.currentUserValue);
  }

  get getRefreshMethod() {
    return this.loadUserData.bind(this);
  }
}
