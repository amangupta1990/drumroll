import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';


@Component({
  selector: 'signup-home',
  templateUrl: 'signup.html'
})
export class SignupPage {

  /** regex for phone number */
  mobileMask:any[] = ['(', /[1-9]/, /\d/, /\d/, ')', ' ',' ', /\d/, /\d/, /\d/, ' ','-',' ', /\d/, /\d/, /\d/, /\d/];
  userMobile:any = null;

  /** regex for otp */
  otpMask:any[] = [ /[1-9]/,' ',/[1-9]/,' ',/[1-9]/,' ',/[1-9]/,' ',/[1-9]/,' ',/[1-9]/];
  userOTP:any = null;

  userName:string= null;
  userDesc:string = null;

  currentPage:number = 1; // set to one af
  maxPages:number= 2; 
  private startSlide:number = 0;
  @ViewChild('signupSlides') slider:Slides;
  constructor(public navCtrl: NavController) {
    
  }

  ngAfterViewInit(){

  //TODO: uuncomment after development;    

   // this.slider.freeMode = false;
    //this.slider.lockSwipes(true);

  

    
    
  }

  

  pager(){
    this.currentPage++;
  
  }

  getOtp(){
    //TODO: get send te mobile otp and continue to next slide
    this.userOTP = null;
    let phone = parseInt( this.userMobile.replace(/\D+/g, ''))
    this.slider.lockSwipes(false);
    this.slider.slideTo(1,500);
    this.slider.lockSwipes(true);
    this.currentPage = 2;
  }

  confirmOTP(){
    let otp = parseInt( this.userOTP.replace(/\D+/g, ''))
    this.slider.lockSwipes(false);
    this.slider.slideTo(2,500);
    this.slider.lockSwipes(true);
    this.currentPage = 3;
  }

  goBack(){
    this.slider.lockSwipes(false);
    this.slider.slideTo(0,500);
    this.slider.lockSwipes(true);
    this.currentPage = 1;
    this.userOTP = null;
    this.userName = null;
    this.userDesc = null;

  }

  saveProfile(){
    //TODO: save the user profile
  }

}
