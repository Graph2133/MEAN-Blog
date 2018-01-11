import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../app.animations';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService} from '../services/auth.service'
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[slideInDownAnimation] 
})
export class HomeComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  constructor(private authService:AuthService) { }

  ngOnInit() {
     
  }

}
