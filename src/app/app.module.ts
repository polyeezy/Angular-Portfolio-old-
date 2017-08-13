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
  { path: '', component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'timeline', component: TimelineComponent },
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
