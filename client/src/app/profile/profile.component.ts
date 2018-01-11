import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { FileUploader, FileUploaderOptions, FileLikeObject } from 'ng2-file-upload';
import { AuthService } from '../services/auth.service';
import { BlogService } from '../services/blog.service';
import { slideInDownAnimation } from '../app.animations';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
const URL = "http://localhost:8080/blogs/avatar";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [slideInDownAnimation]
})

export class ProfileComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  myImgUrl = 'data:image/png;base64,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';
  maxFileSize = 1024 * 1024;
  errorMessage
  filter: string = '';
  username;
  email = '';
  blogPosts: any;
  avatarSrc;
  isEditing = false;
  hasBaseDropZoneOver: boolean = false;
  authToken = localStorage.getItem('token'); //getting token for secured routes
  uo: FileUploaderOptions = {};// we'll store upload options here
  allowedMimeType = ['image/png', 'image/gif', 'image/jpeg', 'image/jpg']; //upload image types
  imageUploadMode = false;
  public uploader: FileUploader = new FileUploader({
    url: URL,
    allowedMimeType: this.allowedMimeType,
    queueLimit: 1,
    maxFileSize: this.maxFileSize
  });//1 MB max file size


  constructor(
    private authService: AuthService,
    private blogService: BlogService
  ) {

    this.uo.headers = [{ name: 'authorization', value: this.authToken }];//setting headers
    this.uploader.setOptions(this.uo);
    this.uploader.onWhenAddingFileFailed = (item, filter, options) => this.onWhenAddingFileFailed(item, filter, options);
    //setting for image upload click event
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      var responsePath = JSON.parse(response);

      setTimeout(() => {
        this.imageUploadMode = false;
        this.authService.getAvatar().subscribe(response => {
          this.uploader.clearQueue();
          this.avatarSrc = response;
        });
      }, 2000)
    };

  }
  saveEditable(value) {
    this.isEditing = true;
  }
  updateUserInfo() {
    this.authService.updateUser(this.username, this.email).subscribe(data => {
      console.log(data);
    });
  }
  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
  uploadImageModeOn() {
    this.imageUploadMode = true;
  }
  onWhenAddingFileFailed(item: FileLikeObject, filter: any, options: any) {
    switch (filter.name) {
      case 'fileSize':
        this.errorMessage = 'Maximum size of uploaded image should be not more than 1 MB';
        setTimeout(() => {
          this.errorMessage = '';
        }, 5000);
        break;

      case 'mimeType':
        const allowedTypes = this.allowedMimeType.join();
        this.errorMessage = 'Check type of uploaded image';
        setTimeout(() => {
          this.errorMessage = '';
        }, 5000);
        break;

      default:
        this.errorMessage = `Unknown error (filter is ${filter.name})`;
        setTimeout(() => {
          this.errorMessage = '';
        }, 5000);
    }
  }

  ngOnInit() {
    // Once component loads, get user's data to display on profile


    this.authService.getProfile().subscribe(profile => {
      this.username = profile.user.username; // Set username
      this.email = profile.user.email; // Set e-mail
    });

    this.blogService.getBlogsOfCurrentUser().subscribe(data => {
      this.blogPosts = data.data;
      console.log(this.blogPosts);
    })

    this.authService.getAvatar().subscribe(response => {
      console.log(response);
      this.avatarSrc = response;


    });
  }
}

