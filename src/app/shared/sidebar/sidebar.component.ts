import { Component, AfterViewInit, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ROUTES, LECTURE_ROUTES } from './menu-items';
import { RouteInfo } from './sidebar.metadata';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
declare var $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  showMenu = '';
  showSubMenu = '';
  public sidebarnavItems: any[];
  // this is for the open close
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthenticationService
  ) {}
  // End open close
  ngOnInit() {
    this.authService.currentUser.subscribe(res => {
      if (res && res.lecturer !== null) {
        this.sidebarnavItems = LECTURE_ROUTES.filter(sidebarnavItem => sidebarnavItem);
      } else {
        this.sidebarnavItems = ROUTES.filter(sidebarnavItem => sidebarnavItem);
      }
    });
  }
}
