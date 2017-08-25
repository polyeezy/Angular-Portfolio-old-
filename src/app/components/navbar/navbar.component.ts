import { Component, OnInit } from '@angular/core';
import { jQuery } from 'jquery';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public  hotdog = false;
  public audio;


  constructor() { }


  public showHotdog () {

    this.hotdog = !this.hotdog;

    this.hotdog ? this.audio.play() : this.audio.pause();
    this.hotdog ? jQuery('#logo').addClass('rotate') : jQuery('#logo').removeClass('rotate');

  }

  ngOnInit() {
    this.audio =  new Audio('assets/mp3/hotdog.mp3');

  }



}
