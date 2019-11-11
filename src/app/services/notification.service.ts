import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { environment } from '../../environments/environment';
import io from 'socket.io-client';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  socket = io(environment.ec2url);

  constructor(private toastr: ToastrService) { }

  subscribeToSocket() {
    this.socket.on('statusUpdate', (data) => {
      // show notification
      this.toastr.success('Success', data.msg, {
        timeOut: 3000
      });
      console.log(data);
    });
  }

  unsubscribeFromSocket() {
    // unsubscribe
    this.socket.off('statusUpdate');
  }
}
