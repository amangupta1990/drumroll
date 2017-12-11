import { Component, ViewChild , Input , Output } from '@angular/core';
import { HeroBannerComponent} from '../hero-banner/hero-banner'

/**
 * Generated class for the ProfileBannerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile-banner',
  templateUrl: 'profile-banner.html'
})
export class ProfileBannerComponent extends HeroBannerComponent {

  @Input('config') config:{
    left:{
       title:string;
       value:string
    },
    center:{
      title:string,
      value:string,
      profilePic:string,
      displayName:string,
      link: string,
      description: string,
      businessName:string,
      location: any;

    },
    right:{
      title:string,
      value:string
    }
  }  

  constructor() {

    super();

  
  }

  fitText(){}

  ngAfterViewInit(){ }

  ngOnChanges(){}

}
