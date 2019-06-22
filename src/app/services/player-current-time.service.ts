import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerCurrentTimeService {

  private dataSource = new BehaviorSubject('0');
  currentTime = this.dataSource.asObservable();

  constructor() { }

  changeTime(time: any) {
    this.dataSource.next(time);
  }
}
