import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { UploadEvent, UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { environment } from '../../../environments/environment';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-upload-lecture',
  templateUrl: './upload-lecture.component.html',
  styleUrls: ['./upload-lecture.component.css']
})
export class UploadLectureComponent implements OnInit {

  public videoFiles: UploadFile[] = [];
  videoFile;
  droppedVideoFile;

  public lectureMaterials: UploadFile[] = [];
  lectureMaterial = [];
  droppedLectureMaterial = [];

  formData = new FormData();

  error: string;
  uploadResponse: {status: '', message: '', filePath: ''};

  constructor(private uploadService: UploadService ) { }

  ngOnInit() {
  }

  public videoDropped(event: UploadEvent) {
    this.videoFiles = event.files;

    for (const droppedFile of event.files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          this.videoFile = file;
          this.droppedVideoFile = droppedFile;

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

  public lectureMaterialsDropped(event: UploadEvent) {
    this.lectureMaterial = [];
    this.droppedLectureMaterial = [];
    this.lectureMaterials = event.files;

    for (const droppedFile of event.files) {

      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.lectureMaterial.push(file);
          this.droppedLectureMaterial.push(droppedFile);
        });
      } else {
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

  public upload() {

    console.log('uploading');
    // You could upload it like this:
    this.formData.append('lecture', this.videoFile, this.droppedVideoFile.relativePath);

    this.lectureMaterial.forEach((item, index) => {
      this.formData.append('materials', item, this.droppedLectureMaterial[index]);
    });

    this.uploadService.upload(this.formData).subscribe(
      (res) => this.uploadResponse = res,
      (err) => this.error = err
    );

    console.log(this.uploadResponse);
    console.log(this.error);

  }

  // public onClick() {
  //   if (this.file && this.droppedFile) {
  //     this.upload(this.file, this.droppedFile);
  //   } else {
  //     console.log('file not selected');
  //   }
  // }

}
