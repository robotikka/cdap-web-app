import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  COMMENT_URL = environment.commentsURL;

  constructor(private http: HttpClient) { }

  updateComment(id, comment) {
    return this.http.put(`${this.COMMENT_URL}/${id}`, comment)
      .pipe(map(data => {
        console.log(data);
        return JSON.stringify(data);
      }));
  }
}
