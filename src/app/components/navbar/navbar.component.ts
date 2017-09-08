import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public  hotdog = false;
  public audio;
  public currentURL = '';

  constructor() { }



  public ShowHotdog () {
    this.hotdog = !this.hotdog;
    this.hotdog ? this.audio.play() : this.audio.pause();
    this.hotdog ? $('#logo').addClass('rotate') : $('#logo').removeClass('rotate');
  }

  ngOnInit() {
    this.audio =  new Audio('assets/mp3/hotdog.mp3');
    this.currentURL = window.location.href;

  }



}
