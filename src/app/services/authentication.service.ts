import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  AUTHENTICATION_URL = environment.authnetication_url;
  SIGNUP_URL = environment.signup_url;

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(this.AUTHENTICATION_URL, { username, password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          console.log(user.token);

          this.decodeJwt(user.token).then(res => {
            localStorage.setItem('currentUser', JSON.stringify(jwt_decode(user.token)));
            this.currentUserSubject.next(user);
          });
          // store user details and jwt token in local storage to keep user logged in between page refreshes
        }

        return user;
      }));
  }

  register(username: string, password: string, email: string, firstname: string, lastname: string, lecturer: boolean) {
    console.log('register called');
    return this.http.post<any>(this.SIGNUP_URL, {username, password, email, firstname, lastname, lecturer})
      .pipe(map(user => {
        console.log(user);
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  decodeJwt(token) {
    return new Promise((resolve, reject) => {
      try {
        const user = jwt_decode(token);
        resolve(user);
      } catch (err) {
        reject(err);
      }
    });
  }
}
