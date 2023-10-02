import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  styleUrls: ['./app.component.css'],
  imports: [
      HomeComponent,
  ],
  template: `<main><header class="brand-name"><img height="100px" class="brand-logo" src="/assets/home-house-svgrepo-com.svg" alt="logo" aria-hidden="true"> </header> <section class="content"> <app-home></app-home> </section> </main>`,
})

export class AppComponent {
  title = 'homes';
}
