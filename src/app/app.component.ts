import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthenticationService, private notificationService: NotificationService) {}

  ngOnInit(): void {
    console.log('oninit');

    this.authService.currentUser.subscribe(res => {
      console.log(res);

      if (res && res.lecturer === true) {
        this.notificationService.subscribeToSocket();
        console.log('lecturer');
      } else {
        console.log('not lecturer');
        // user lecturer// unsubscribe

      }
    });
  }

}
