import { Component, ViewChild, ElementRef } from '@angular/core';

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
  @ViewChild('cashcontainer') cashcontainer:ElementRef;
  text: string;
  amount: string = "$50";
  constructor() {
    console.log('Hello HeroBannerComponent Component');
    this.text = 'Hello World';

    // to be run when values are updated
    
  }

  ngAfterViewInit(){
    this.fitText();
  }

  fitText(){
    let text = this.cashcontainer.nativeElement.innerText;

    switch(text.length >=4){
      case true:{
        this.cashcontainer.nativeElement.style.fontSize = '50px';
        this.cashcontainer.nativeElement.style.marginTop = '40px';
        break;
      }

      case false:{
        this.cashcontainer.nativeElement.style.fontSize = '78px';
        this.cashcontainer.nativeElement.style.marginTop = '20px';
      }
    }
  }

}
