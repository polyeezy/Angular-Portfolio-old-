import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title }  from '@angular/platform-browser';


import * as jQuery from 'jquery';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  constructor(meta: Meta, private titleService: Title) {

    this.titleService.setTitle("Valérian Polizzi - Timeline");

    meta.updateTag({ name: 'title', content: 'Valérian Polizzi - Timeline' });
    meta.updateTag({ name: 'description', content: 'Navigate on what Valérian Polizzi accomplished' });


    meta.updateTag({ name: 'og:url', content: 'http://www.valerianpolizzi.fr/timeline' });
    meta.updateTag({ name: 'og:title', content: 'Valérian Polizzi - Timeline' });
    meta.updateTag({ name: 'og:description', content: 'Navigate on what Valérian Polizzi accomplished' });
    meta.updateTag({ name: 'og:image', content: 'http://www.valerianpolizzi.fr/assets/img/share.png' });

    meta.updateTag({ name: 'twitter:card', content: 'summary' });
    meta.updateTag({ name: 'twitter:site', content: '@polyeezy' });
    meta.updateTag({ name: 'twitter:title', content: 'Valérian Polizzi - Timeline' });
    meta.updateTag({ name: 'twitter:description', content: 'Navigate on what Valérian Polizzi accomplished' });
    meta.updateTag({ name: 'twitter:image', content: 'http://www.valerianpolizzi.fr/assets/img/share.png' });

  }

  ngOnInit() {
  }

}
