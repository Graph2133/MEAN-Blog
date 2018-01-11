import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { DomSanitizer } from '@angular/platform-browser';
import { ResponseContentType } from '@angular/http';
@Injectable()
export class AuthService {

  domain = "http://localhost:8080/"; // Development Domain - Not Needed in Production
  authToken;
  user;
  options;

  constructor(
    private http: Http,
    private sanitizer: DomSanitizer
  ) { }

  // Function to create headers, add token, to be used in HTTP requests
  createAuthenticationHeaders() {
    this.loadToken(); // Get token so it can be attached to headers
    // Headers configuration options
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json', // Format set to JSON
        'authorization': this.authToken // Attach token
      })
    });
  }

  // Function to get token from client local storage
  loadToken() {
    this.authToken = localStorage.getItem('token'); // Get token and asssign to variable to be used elsewhere
  }

  // Function to register user accounts
  registerUser(user) {
    return this.http.post(this.domain + 'authentication/register', user).map(res => res.json());
  }

  // Function to check if username is taken
  checkUsername(username) {
    return this.http.get(this.domain + 'authentication/checkUsername/' + username).map(res => res.json());
  }

  // Function to check if e-mail is taken
  checkEmail(email) {
    return this.http.get(this.domain + 'authentication/checkEmail/' + email).map(res => res.json());
  }

  // Function to login user
  login(user) {
    return this.http.post(this.domain + 'authentication/login', user).map(res => res.json());
  }

  // Function to logout
  logout() {
    this.authToken = null; // Set token to null
    this.user = null; // Set user to null
    localStorage.clear(); // Clear local storage
  }

  // Function to store user's data in client local storage
  storeUserData(token, user) {
    localStorage.setItem('token', token); // Set token in local storage
    localStorage.setItem('user', JSON.stringify(user)); // Set user in local storage as string
    this.authToken = token; // Assign token to be used elsewhere
    this.user = user; // Set user to be used elsewhere
  }

  // Function to get user's profile data
  getProfile() {
    this.createAuthenticationHeaders(); // Create headers before sending to API
    return this.http.get(this.domain + 'authentication/profile', this.options).map(res => res.json());
  }

    // Function to get public profile data
  getPublicProfile(username) {
    this.createAuthenticationHeaders(); // Create headers before sending to API
    return this.http.get(this.domain + 'authentication/publicProfile/' + username, this.options).map(res => res.json());
  }


  getAvatar(){
    this.createAuthenticationHeaders();
    return this.http
        .get(this.domain+'blogs/avatar', {
          headers:   new Headers({
        'Content-Type': 'application/json', // Format set to JSON
        'authorization': this.authToken // Attach token
      }),
            responseType: ResponseContentType.Blob
        })
        .map(res => res.blob())
        .map(blob => {
            let urlCreator = window.URL;
            return  this.sanitizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(blob));
          })

  }
  updateUser(username,email){
     this.createAuthenticationHeaders();
       const userData = {
      username: username,
      email: email
    }
    return this.http.post(this.domain + 'authentication/update', userData, this.options).map(res => res.json());
  }
  // Function to check if user is logged in
  loggedIn() {
    return tokenNotExpired();
  }



}