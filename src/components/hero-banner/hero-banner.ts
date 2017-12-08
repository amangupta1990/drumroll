import { Component } from '@angular/core';

/**
 * Generated class for the HeroBannerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'hero-banner',
  templateUrl: 'hero-banner.html'
})
export class HeroBannerComponent {

  text: string;

  constructor() {
    console.log('Hello HeroBannerComponent Component');
    this.text = 'Hello World';
  }

}
