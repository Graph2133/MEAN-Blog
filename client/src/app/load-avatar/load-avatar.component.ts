import { Component, OnInit  } from '@angular/core';
import { FileUploader,FileUploaderOptions} from 'ng2-file-upload';
import  { Http, Headers, RequestOptions } from '@angular/http';
import { AuthService} from  '../services/auth.service'
// const URL = '/api/';
const URL = "http://localhost:8080/blogs/avatar";
 
@Component({
  selector: 'app-load-avatar',
  templateUrl: './load-avatar.component.html',
  styleUrls: ['./load-avatar.component.css']
})
export class LoadAvatarComponent {
   
     authToken = localStorage.getItem('token');
     uo: FileUploaderOptions = {};
    
   allowedMimeType = ['image/png', 'image/gif','image/jpeg','image/jpg'];
   public uploader:FileUploader = new FileUploader({url: URL,
   allowedMimeType: this.allowedMimeType,
   queueLimit: 1});
   
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  constructor( ) {
    
    this.uo.headers = [{name:'authorization',value: this.authToken } ]
     this.uploader.setOptions(this.uo);
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
    var responsePath = JSON.parse(response);
    console.log(response, responsePath);// the url will be in the response
};
   }
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  
   ngOnInit() {
     
  }
}