import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpResponse, HttpEventType } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  UPLOAD_URL = environment.upload_url;

  constructor(private httpClient: HttpClient) { }

  upload(data) {
    return this.httpClient.post<any>(this.UPLOAD_URL, data, {
      reportProgress: true,
      observe: 'events'
    }).pipe(map((event) => {

      switch (event.type) {

        case HttpEventType.UploadProgress:
          const progress = Math.round(100 * event.loaded / event.total);
          return { status: 'progress', message: progress };

        case HttpEventType.Response:
          return event.body;

        case HttpEventType.Sent:
          return { status: 'sent', message: 'sent' };

        default:
          return `Unhandled event: ${event.type}`;
      }
    })
    );
  }
}
