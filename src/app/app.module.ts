import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FrontpageComponent } from './pages/frontpage/frontpage.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { AboutComponent } from './pages/about/about.component';
import { SocialComponent } from './pages/social/social.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AboutComponent,
    data: {
      meta: {
        title: 'Valérian Polizzi',
        description: 'Welcome to Valérian Polizzi\'s website'
      }
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      meta: {
        title: 'About Valérian Polizzi',
        description: 'Valérian Polizzi (/vəˈlɪriːən/, known as Polyeezy on social medias, born April 7, 1994) is a developper. Born in Cagnes-sur-Mer and raised in Biot, Valérian attended Epitech Computer Software Engineering (2013) ...'
      },
    }
  },
  { path: 'timeline',
    component: TimelineComponent,
    data: {
      meta: {
        title: 'Timeline',
        description: 'Navigate on what Valérian Polizzi accomplished'
      },
    }
  },
  { path: 'social', component: SocialComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FrontpageComponent,
    TimelineComponent,
    AboutComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false

      } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
