import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';


@Component({
  selector: 'signup-home',
  templateUrl: 'signup.html'
})
export class SignupPage {

  /** regex for phone number */
  mask:any[] = ['(', /[1-9]/, /\d/, /\d/, ')', ' ',' ', /\d/, /\d/, /\d/, ' ','-',' ', /\d/, /\d/, /\d/, /\d/];
  userMobile:any = null;
  currentPage:number = 1;
  maxPages:number= 2; 
  private startSlide:number = 0;
  @ViewChild('signupSlides') slider:Slides;
  constructor(public navCtrl: NavController) {
    
  }

  ngAfterViewInit(){
    this.slider.freeMode = false;
    this.slider.lockSwipes(true);

    
    
  }

  

  pager(){
    this.currentPage++;
  
  }

  getOtp(){
    //TODO: get send te mobile otp and continue to next slide
    let phone = parseInt( this.userMobile.replace(/\D+/g, ''))
    this.slider.lockSwipes(false);
    this.slider.slideNext(500);
    this.slider.lockSwipes(true);
    this.currentPage = 2;
  }

}
