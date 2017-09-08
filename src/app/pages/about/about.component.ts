import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';

declare var jquery: any;
declare var $ : any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {



  constructor(meta: Meta, private titleService: Title) {

    this.titleService.setTitle('Valérian Polizzi - About');

    meta.updateTag({ name: 'title', content: 'Valérian Polizzi - About' });
    meta.updateTag({ name: 'description', content: 'Ask about me' });

    meta.updateTag({ name: 'og:url', content: 'http://www.valerianpolizzi.fr/about' });
    meta.updateTag({ name: 'og:title', content: 'Valérian Polizzi - About Valérian Polizzi' });
    meta.updateTag({ name: 'og:description', content: 'Digital Manufacturer' });
    meta.updateTag({ name: 'og:image', content: 'http://www.valerianpolizzi.fr/assets/img/share.png' });

    meta.updateTag({ name: 'twitter:card', content: 'summary' });
    meta.updateTag({ name: 'twitter:site', content: '@polyeezy' });
    meta.updateTag({ name: 'twitter:title', content: 'Valérian Polizzi - About Valérian Polizzi' });
    meta.updateTag({ name: 'twitter:description', content: 'Digital Manufacturer' });
    meta.updateTag({ name: 'twitter:image', content: 'http://www.valerianpolizzi.fr/assets/img/share.png' });

  }

  ngOnInit() {

    if ($(window).width() > 720) {
      $('#profile-img-container').height($('#description-container').height() + 30);
    }

    $( window ).resize(function() {
      if ($(window).width() > 720) {
        $('#profile-img-container').height($('#description-container').height() + 30);
      }
    });


    $('.tooltipped').tooltip({delay: 50});
  }



}
