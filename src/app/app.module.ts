import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FrontpageComponent } from './pages/frontpage/frontpage.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { AboutComponent } from './pages/about/about.component';
import { SocialComponent } from './pages/social/social.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WorkflowComponent } from './pages/workflow/workflow.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AboutComponent,
    data: {
      meta: {
        title: 'Valérian Polizzi',
        description: 'Digital Manufacturer'
      }
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      meta: {
        title: 'Valérian Polizzi - Aboutd',
        description: 'About Valérian Polizzi'
      },
    }
  },
  { path: 'timeline',
    component: TimelineComponent,
    data: {
      meta: {
        title: 'Timeline',
        description: 'Valérian\'s Timeline'
      },
    }
  },
  { path: 'skills',
    component: SkillsComponent,
    data: {
      meta: {
        title: 'Skills',
        description: 'What Valérian learned'
      },
    }
  },
  { path: 'workflow',
    component: WorkflowComponent,
    data: {
      meta: {
        title: 'Workflow',
        description: 'Workflow'
      },
    }
  },
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FrontpageComponent,
    TimelineComponent,
    AboutComponent,
    SocialComponent,
    FooterComponent,
    SkillsComponent,
    ContactComponent,
    WorkflowComponent
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
