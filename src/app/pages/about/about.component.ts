import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {



  constructor(meta: Meta, private titleService: Title) {

    this.titleService.setTitle("Valérian Polizzi - About");

    meta.updateTag({ name: 'title', content: 'Valérian Polizzi - About' });
    meta.updateTag({ name: 'description', content: 'Ask about me' });

    meta.updateTag({ name: 'og:url', content: 'http://www.valerianpolizzi.fr/about' });
    meta.updateTag({ name: 'og:title', content: 'Valérian Polizzi - About Valérian Polizzi' });
    meta.updateTag({ name: 'og:description', content: 'Valérian Polizzi (/vəˈlɪriːən/, known as Polyeezy on social medias, born April 7, 1994) is a developper. Born in Cagnes-sur-Mer and raised in Biot, Valérian attended Epitech Computer Software Engineering (2013) , a private institution of higher education in general computer science. Polyeezy completed his bachelor degree in Computer Software Engineering as he heading in Brussel, to pursue a program focusing on innovation and entrepreneurship.' });
    meta.updateTag({ name: 'og:image', content: 'http://www.valerianpolizzi.fr/assets/img/share.png' });

    meta.updateTag({ name: 'twitter:card', content: 'summary' });
    meta.updateTag({ name: 'twitter:site', content: '@polyeezy' });
    meta.updateTag({ name: 'twitter:title', content: 'Valérian Polizzi - About Valérian Polizzi' });
    meta.updateTag({ name: 'twitter:description', content: 'Valérian Polizzi (/vəˈlɪriːən/, known as Polyeezy on social medias, born April 7, 1994) is a developper. Born in Cagnes-sur-Mer and raised in Biot, Valérian attended Epitech Computer Software Engineering (2013) , a private institution of higher education in general computer science. Polyeezy completed his bachelor degree in Computer Software Engineering as he heading in Brussel, to pursue a program focusing on innovation and entrepreneurship.' });
    meta.updateTag({ name: 'twitter:image', content: 'http://www.valerianpolizzi.fr/assets/img/share.png' });


  }

  ngOnInit() {

  }



}
