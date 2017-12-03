import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'signup-home',
  templateUrl: 'signup.html'
})
export class SignupPage {

  private startSlide:number = 0;
  @ViewChild('signupSlides') slider:Slides;
  constructor(public navCtrl: NavController) {
    
  }

  ngAfterViewInit(){
    this.slider.freeMode = false;
    this.slider.lockSwipes(true);
  }

}
