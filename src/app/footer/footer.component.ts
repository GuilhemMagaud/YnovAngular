import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <a routerLink="">
      Back to Home
    </a>
    <a routerLink="about">
      about
    </a>
  `,
  styles: [
  ]
})
export class FooterComponent {

}
