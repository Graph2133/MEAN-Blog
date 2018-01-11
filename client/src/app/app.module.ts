
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms'
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http'
import {NgxPaginationModule} from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import 'hammerjs';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component'

import { RegisterComponent } from './register/register.component';
import { AuthService} from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard} from './guard/auth.guard';
import { NotAuthGuard  } from './guard/notAuth.guard';
import { BlogComponent } from './blog/blog.component';
import { BlogService } from './services/blog.service';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { DeleteBlogComponent } from './delete-blog/delete-blog.component';
import { PublicProfileComponent } from './public-profile/public-profile.component';
import {AppMaterialModule} from './app-material';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { StringFilterPipe } from './string-filter.pipe';
import { LoadAvatarComponent } from './load-avatar/load-avatar.component';
import { FileSelectDirective, FileDropDirective, FileUploadModule } from 'ng2-file-upload';
import { InlineEditorModule } from '@qontu/ngx-inline-editor';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    BlogComponent,
    EditBlogComponent,
    DeleteBlogComponent,
    PublicProfileComponent,
    StringFilterPipe, 
    LoadAvatarComponent
     
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FlashMessagesModule,
    AppMaterialModule,
    FormsModule,
    NgxPaginationModule,
    FileUploadModule,
    InlineEditorModule
  ],
  providers: [AuthService,AuthGuard,NotAuthGuard,BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
