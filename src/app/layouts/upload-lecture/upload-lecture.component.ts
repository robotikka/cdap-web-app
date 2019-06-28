import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { UploadEvent, UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-upload-lecture',
  templateUrl: './upload-lecture.component.html',
  styleUrls: ['./upload-lecture.component.css']
})
export class UploadLectureComponent implements OnInit {

  public files: UploadFile[] = [];
  file;
  droppedFile;

  constructor(private http: Http) { }

  ngOnInit() {
  }

  public dropped(event: UploadEvent) {
    this.files = event.files;

    for (const droppedFile of event.files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          this.file = file;
          this.droppedFile = droppedFile;

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }

    }
  }

  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }

  public upload(file, droppedFile) {
    // You could upload it like this:
    const formData = new FormData();
    const headers = new Headers({
      'security-token': 'mytoken'
    });
    formData.append('file', file, droppedFile.relativePath);
    this.http.post(environment.upload_url, formData, { headers: headers })
      .subscribe(data => {
        console.log('data : ' + data);
      });
  }

  public onClick() {
    if (this.file && this.droppedFile) {
      this.upload(this.file, this.droppedFile);
    } else {
      console.log('file not selected');
    }
  }

}
