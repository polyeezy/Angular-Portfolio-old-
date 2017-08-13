import { Component, OnInit } from '@angular/core';
import Parallax from 'parallax-js';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    console.log(Parallax);
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene, {
      limitY: 0
    });

    console.log(parallax);

  }

}
