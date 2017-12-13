import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public state: AppState) { 
  }

  ngOnInit() {
  }

}